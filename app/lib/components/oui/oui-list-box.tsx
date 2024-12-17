import type { ListBoxItemProps, ListBoxProps } from 'react-aria-components'
import { ListBox, ListBoxItem } from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'

/* shadcn SelectContent
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
*/

export function OuiListBox<T extends object>({
  className,
  ...props
}: ListBoxProps<T>) {
  return (
    <ListBox
      {...props}
      className={composeTailwindRenderProps(
        className,
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
      )}
    />
  )
}
OuiListBox.displayName = 'OuiListBox'

export function OuiListBoxItem({ className, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={composeTailwindRenderProps(className, '')}
    />
  )
}
