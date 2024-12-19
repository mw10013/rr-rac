import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

// shadcn button: focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
export const focusRing = tv({
  // focus-visible:outline-none to reset browser focus-visible.
  base: 'focus-visible:outline-none data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring',
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}
