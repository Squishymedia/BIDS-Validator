import { main } from './main.ts'

const result = await main()

const errors = result.issues.get({ severity: 'error' })
if (errors.length) {
  Deno.exit(1)
}
Deno.exit(0)
