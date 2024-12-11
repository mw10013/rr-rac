import type { Route } from './+types/home'
import { OuiButton } from '~/lib/components/oui/oui-button'
import { OuiCheckbox } from '~/lib/components/oui/oui-checkbox'
import { OuiSwitch } from '~/lib/components/oui/oui-switch'
import { OuiTextField } from '~/lib/components/oui/oui-text-field'
import { StarterComponents } from '~/lib/components/starter-components'
import { Button } from '~/lib/components/ui/button'
import { Checkbox } from '~/lib/components/ui/checkbox'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'
import { Switch } from '~/lib/components/ui/switch'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'rr-rac' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiTextField label="Email" placeholder="Email" />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <OuiTextField isDisabled placeholder="Email" />
      <Input disabled type="email" placeholder="Email" />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <OuiTextField placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <OuiCheckbox>Accept terms and conditions</OuiCheckbox>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
      </div>
      <OuiSwitch>Airplane Mode</OuiSwitch>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <OuiSwitch defaultSelected isDisabled isReadOnly />
      <Switch checked disabled aria-readonly />
      <OuiSwitch defaultSelected isDisabled>
        Wifi Mode
      </OuiSwitch>
      <div className="flex items-center space-x-2">
        <Switch id="wifi-mode" checked disabled />
        <Label htmlFor="wifi-mode">Wifi Mode</Label>
      </div>

      <OuiButton>Oui Button</OuiButton>
      <Button>Shadcn Button</Button>
      <StarterComponents />
    </div>
  )
}
