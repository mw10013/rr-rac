import type { ReactNode } from 'react'
import type {
  DialogProps,
  HeadingProps,
  ModalOverlayProps,
  PopoverProps,
} from 'react-aria-components'
import { X } from 'lucide-react'
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  Popover,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { composeTailwindRenderProps } from './oui-base'

export const OuiDialogTrigger = DialogTrigger

// shadcn DialogOverlay: fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
export function OuiModalOverlay({ className, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay
      {...props}
      className={composeTailwindRenderProps(
        className,
        'fixed inset-0 z-50 bg-black/80 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0'
      )}
      // className={composeRenderProps(
      //   className,
      //   (className, { isEntering, isExiting }) =>
      //     twMerge(
      //       `fixed inset-0 z-50 bg-black/80`,
      //       isEntering ? 'animate-in fade-in-0' : '',
      //       isExiting ? 'animate-out fade-out-0' : '',
      //       className
      //     )
      // )}
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
        'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:slide-in-from-left-1/2 data-[entering]:slide-in-from-top-[48%] data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[48%] sm:rounded-lg'
      )}
    />
  )
}

export interface OuiDialogProps extends Omit<DialogProps, 'children'> {
  children?: ReactNode
}

// shadcn DialogContent: fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
export function OuiDialog({ className, children, ...props }: OuiDialogProps) {
  // shadcn DialogPrimitive.Close: absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground
  return (
    <Dialog {...props} className={twMerge('grid gap-4', className)}>
      {({ close }) => (
        <>
          {children}
          <Button
            slot="close"
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

// shadcn DialogHeader: flex flex-col space-y-1.5 text-center sm:text-left
export const OuiDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
  />
)
OuiDialogHeader.displayName = 'OuiDialogHeader'

// shadcn DialogFooter: flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2
export const OuiDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
  />
)
OuiDialogFooter.displayName = 'OuiDialogFooter'

// shadcn DialogTitle: text-lg font-semibold leading-none tracking-tight
export const OuiDialogHeading = ({ className, ...props }: HeadingProps) => (
  <Heading
    level={2}
    slot="title"
    {...props}
    className={twMerge(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
  />
)
OuiDialogHeading.displayName = 'OuiDialogHeading'

// shadcn DialogDescription: text-sm text-muted-foreground
export const OuiDialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={twMerge('text-sm text-muted-foreground', className)}
  />
)

export const OuiPopoverTrigger = DialogTrigger

// shadcn PopoverContent: z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
export const OuiPopover = ({
  className,
  offset = 4,
  ...props
}: PopoverProps) => (
  <Popover
    {...props}
    offset={offset}
    className={composeTailwindRenderProps(
      className,
      'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2'
    )}
  />
)

export const OuiPopoverDialog = Dialog
