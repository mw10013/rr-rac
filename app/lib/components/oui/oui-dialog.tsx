import type { ReactNode } from 'react'
import type { DialogProps, ModalOverlayProps } from 'react-aria-components'
import { X } from 'lucide-react'
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'

export const OuiDialogTrigger = DialogTrigger

// shadcn DialogOverlay: fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
export function OuiModalOverlay({ className, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay
      {...props}
      className={composeTailwindRenderProps(
        className,
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      )}
    />
  )
}
OuiModalOverlay.displayName = 'OuiModalOverlay'

// shadcn DialogContent: fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
export function OuiModal({ className, ...props }: ModalOverlayProps) {
  return (
    <Modal
      {...props}
      className={composeTailwindRenderProps(
        className,
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
      )}
    />
  )
}

export interface OuiDialogProps extends Omit<DialogProps, 'children'> {
  children?: ReactNode
}

export function OuiDialog({ children, ...props }: OuiDialogProps) {
  // shadcn DialogPrimitive.Close: absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground
  return (
    <Dialog {...props}>
      {({ close }) => (
        <>
          {children}
          <Button
            onPress={close}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Button>
        </>
      )}
    </Dialog>
  )
}
