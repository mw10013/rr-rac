import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

// https://github.com/irsyadadl/justd/blob/main/components/ui/primitive.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/compose.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/styles.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/classes.ts

// shadcn button base: inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
// ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:pointer-events-none disabled:opacity-50

// shadcn switch: peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
// transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
// disabled:cursor-not-allowed disabled:opacity-50
// data-[state=checked]:bg-primary data-[state=unchecked]:bg-input

// ring-offset-background discrepency between shadcn button and switch.
// shadcn input has ring-offset-background

export const focusRing = tv({
  // base: 'ring-offset-background transition-colors',
  // no transition-colors since no transition duration.
  // focus-visible:outline-none and focus-visible:outline-none data-[focus-visible]:outline-none to reset browser and rac.
  base: 'transition-colors focus-visible:outline-none data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring ',
  // variants: {
  //   isFocusVisible: {
  //     true: 'outline-none ring-2 ring-ring ring-offset-2',
  //   },
  // },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}
