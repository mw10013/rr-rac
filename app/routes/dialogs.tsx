'use client'

import { Modal } from 'react-aria-components'
import { OuiButton } from '~/lib/components/oui/oui-button'
import { OuiDialog, OuiDialogTrigger } from '~/lib/components/oui/oui-dialog'
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
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'

function OuiDialogExample() {
  return (
    <OuiDialogTrigger>
      <OuiButton variant="outline">Edit Profile</OuiButton>
      <Modal>
        <OuiDialog>
          {/* <Heading
            slot="title"
            className="text-xxl my-0 font-semibold leading-6 text-slate-700">
            Delete folder
          </Heading> */}
          Jello dia
        </OuiDialog>
      </Modal>
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
        <div className="grid gap-4 py-4">
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
        </div>
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
