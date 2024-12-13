import { OuiCheckbox } from '~/lib/components/oui/oui-checkbox'
import { Checkbox } from '~/lib/components/ui/checkbox'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiCheckbox>Accept terms and conditions</OuiCheckbox>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
      </div>
      <OuiCheckbox isDisabled>Accept terms and conditions</OuiCheckbox>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" disabled />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
      </div>
    </div>
  )
}
