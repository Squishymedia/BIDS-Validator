var async  = require('async');
var utils  = require('../utils');

var TSV    = require('./tsv');
var JSON   = require('./json');
var NIFTI  = require('./nii');

var BIDS = {

    errors:   [],
    warnings: [],
    sidecars: [],

    /**
     * Start
     *
     */
    start: function (dir, callback) {
        BIDS.reset();
        var self = BIDS;
        utils.readDir(dir, function (files) {
            self.quickTest(files, function (couldBeBIDS) {
                if (couldBeBIDS) {
                    self.determineSidecars(files, function () {
                        self.fullTest(files, callback);
                    });
                } else {
                    callback('Invalid');
                }
            });
        });
    },

    /**
     * Quick Test
     *
     * A quick test to see if it could be a BIDS
     * dataset based on structure/naming. If it
     * could be it will trigger the full validation
     * otherwise it will throw a callback with a
     * generic error.
     */
    quickTest: function (fileList, callback) {
        var couldBeBIDS = false;
        for (var key in fileList) {
            var file = fileList[key];
            var path = utils.relativePath(file);
            if (path) {
                path = path.split('/');
                if (path.length > 5) {couldBeBIDS = false; break;}
                path = path.reverse();

                if (
                    path[0].indexOf('.nii.gz') > -1 &&
                    (path[1].indexOf('anat') > -1 ||
                     path[1].indexOf('func') > -1 ||
                     path[1].indexOf('dwi') > -1) &&
                    (
                        (path[2] && path[2].indexOf('ses') > -1) ||
                        (path[2] && path[2].indexOf('sub') > -1)
                    )
                ) {
                    couldBeBIDS = true;
                    break;
                }
            }
        }
        callback(couldBeBIDS);
    },

    /**
     * Determine sidecars
     *
     * Compares JSON files and scans to determine which
     * JSON files are metadata sidecars and which scans
     * are missing a sidecar.
     */
    determineSidecars: function (fileList, callback) {
        var self      = this;
        var scans     = [];
        var JSONFiles = [];

        // collect nifti and json files
        for (var key in fileList) {
            var file = fileList[key];
            var path = utils.relativePath(file);
            if (file.name && file.name.indexOf('.nii.gz') > -1) {scans.push(path);}
            if (file.name && file.name.indexOf('.json') > -1)   {JSONFiles.push(path);}
        }

        // compare scans against json files
        for (var i = scans.length -1; i > -1; i--) {
            var scan = scans[i];

            // remove perfect matches
            var scan = scan.replace('.nii.gz', '');
            var sidecarIndex = JSONFiles.indexOf(scan + '.json');
            if (sidecarIndex > -1) {
                scans.splice(i, 1);
                var sidecar = JSONFiles.splice(sidecarIndex, 1);
                self.sidecars.push(sidecar[0]);
            }

            // remove sbref scans & metadata
            if (scan.indexOf('sbref') > -1 || scan == 'dataset_description.json') {
                scans.splice(i, 1);
            }
        }

        callback();
    },

    /**
     * Full Test
     *
     * Takes on an array of files and starts
     * the validation process for a BIDS
     * package.
     */
    fullTest: function (fileList, callback) {
        var self = this;

        // validate individual files
        async.forEachOf(fileList, function (file, key, cb) {
            var path = utils.relativePath(file);

            // validate NifTi
            if (file.name && file.name.indexOf('.nii') > -1) {
                // check if NifTi is gzipped
                if (file.name.indexOf('.gz') === -1) {
                    var newError = {
                        evidence: file.name,
                        line: null,
                        character: null,
                        reason: 'NifTi files should be compressed using gzip.',
                        severity: 'error'
                    }

                    self.errors.push({file: file, errors: [newError]});
                }
                cb();
                return;
            }

            // validate tsv
            if (file.name && file.name.indexOf('.tsv') > -1) {
                utils.readFile(file, function (contents) {
                    TSV(contents, function (errs, warns) {
                        if (errs && errs.length > 0) {
                            self.errors.push({file: file, errors: errs})
                        }
                        if (warns && warns.length > 0) {
                            self.warnings.push({file: file, errors: warns});
                        }
                        cb();
                    });
                });
                return;
            }

            // validate json
            if (file.name && file.name.indexOf('.json') > -1) {
                var isSidecar = self.isSidecar(file);
                utils.readFile(file, function (contents) {
                    JSON(contents, isSidecar, function (errs) {
                        if (errs) {
                            self.errors.push({file: file, errors: errs})
                        }
                        cb();
                    });
                });
            } else {
                cb();
            }

        }, function () {
            callback(self.errors, self.warnings);
        });
    },

    /**
     * Is Sidecar
     *
     * Takes a file object and returns a boolean value
     * of whether or not it is a sidecar.
     */
    isSidecar: function (file) {
        return this.sidecars.indexOf(utils.relativePath(file)) > -1;
    },

    /**
     * Reset
     *
     * Resets the in object data back to original values.
     */
    reset: function () {
        this.errors = [];
        this.warnings = [];
        this.sidecars = [];
    }
};

module.exports = BIDS;

/**
 * BIDS
 *
 * Takes either a filelist array or
 * a path to a BIDS directory and
 * starts the validation process and
 * returns the errors and warnings as
 * arguments to the callback.
 */
// module.exports = function (dir, callback) {
//     BIDS.reset();
//     utils.readDir(dir, function (files) {
//         BIDS.start(files, callback);
//     });
// };
