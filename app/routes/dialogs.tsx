'use client'

import { OuiButton } from '~/lib/components/oui/oui-button'
import {
  OuiDialog,
  OuiDialogDescription,
  OuiDialogFooter,
  OuiDialogHeader,
  OuiDialogHeading,
  OuiDialogTrigger,
  OuiModal,
  OuiModalOverlay,
} from '~/lib/components/oui/oui-dialog'
import { OuiTextFieldEx } from '~/lib/components/oui/oui-text-field'
import { Button } from '~/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/lib/components/ui/dialog'

function OuiDialogExample() {
  return (
    <OuiDialogTrigger>
      <OuiButton variant="outline">Edit Profile</OuiButton>
      <OuiModalOverlay>
        <OuiModal>
          <OuiDialog>
            <OuiDialogHeader>
              <OuiDialogHeading>Edit profile</OuiDialogHeading>
              <OuiDialogDescription>
                Make changes to your profile here. Click save when you're done.
              </OuiDialogDescription>
            </OuiDialogHeader>
            <OuiTextFieldEx
              autoFocus
              label="Name"
              placeholder="Pedro Duarte"
              className="focus-visible:outline-none"
            />
            <OuiDialogFooter>
              <OuiButton>Save changes</OuiButton>
            </OuiDialogFooter>
          </OuiDialog>
        </OuiModal>
      </OuiModalOverlay>
    </OuiDialogTrigger>
  )
}

function ShadcnDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiDialogExample />
      <ShadcnDialogExample />
    </div>
  )
}
