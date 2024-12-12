import { OuiButton } from '~/lib/components/oui/oui-button'
import { Button } from '~/lib/components/ui/button'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiButton>Oui Button</OuiButton>
      <Button>Shadcn Button</Button>
      <OuiButton variant="secondary">Oui Button</OuiButton>
      <Button variant="secondary">Shadcn Button</Button>
      <OuiButton isDisabled>Oui Button</OuiButton>
      <Button disabled>Shadcn Button</Button>
    </div>
  )
}
