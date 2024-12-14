import { OuiSwitch } from '~/lib/components/oui/oui-switch'
import { Label } from '~/lib/components/ui/label'
import { Switch } from '~/lib/components/ui/switch'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiSwitch>Airplane Mode</OuiSwitch>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <OuiSwitch isDisabled>Airplane Mode</OuiSwitch>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode2" disabled />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  )
}
