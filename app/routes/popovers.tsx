'use client'

import { OuiButton } from '~/lib/components/oui/oui-button'
import {
  OuiPopover,
  OuiPopoverDialog,
  OuiPopoverTrigger,
} from '~/lib/components/oui/oui-dialog'
import { OuiTextFieldEx } from '~/lib/components/oui/oui-text-field'
import { Button } from '~/lib/components/ui/button'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/lib/components/ui/popover'

function OuiExample() {
  return (
    <OuiPopoverTrigger>
      <OuiButton variant="outline">Open popover</OuiButton>
      <OuiPopover className="w-80">
        <OuiPopoverDialog>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
              <OuiTextFieldEx
                autoFocus
                label="Name"
                placeholder="Pedro Duarte"
              />
            </div>
          </div>
        </OuiPopoverDialog>
      </OuiPopover>
    </OuiPopoverTrigger>
  )
}

function ShadcnExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
    </div>
  )
}
