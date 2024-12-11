import { StarterMenu } from './starter-menu'
import { StarterTable } from './starter-table'
import { Button } from './starter/Button'

export function StarterComponents() {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-lg border p-12">
      <StarterMenu />
      <StarterTable />
      <Button>Book flight</Button>
    </div>
  )
}
