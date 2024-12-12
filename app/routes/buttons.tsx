import { OuiButton } from '~/lib/components/oui/oui-button'
import { Button } from '~/lib/components/ui/button'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiButton>Oui Button</OuiButton>
      <Button>Shadcn Button</Button>
      <OuiButton variant="secondary" size="sm">
        Oui Button
      </OuiButton>
      <Button variant="secondary" size="sm">
        Shadcn Button
      </Button>
      <OuiButton variant="destructive">Oui Button</OuiButton>
      <Button variant="destructive">Shadcn Button</Button>
      <OuiButton variant="outline" size="lg">
        Oui Button
      </OuiButton>
      <Button variant="outline" size="lg">
        Shadcn Button
      </Button>
      <OuiButton variant="ghost">Oui Button</OuiButton>
      <Button variant="ghost">Shadcn Button</Button>
      <OuiButton isDisabled>Oui Button</OuiButton>
      <Button disabled>Shadcn Button</Button>
    </div>
  )
}
