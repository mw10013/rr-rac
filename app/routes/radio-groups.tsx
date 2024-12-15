import { Radio } from 'react-aria-components'
import { OuiRadio, OuiRadioGroup } from '~/lib/components/oui/oui-radio-group'
import { Label } from '~/lib/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/lib/components/ui/radio-group'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiRadioGroup>
        <OuiRadio value="dogs">Dog</OuiRadio>
        <OuiRadio value="cats">Cat</OuiRadio>
      </OuiRadioGroup>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
