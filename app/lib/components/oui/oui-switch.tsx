import type { SwitchProps } from 'react-aria-components'
import React from 'react'
import { Switch } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './oui-base'

export interface OuiSwitchProps extends Omit<SwitchProps, 'children'> {
  children?: React.ReactNode
}

// shadcn switch: peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
// transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
// disabled:cursor-not-allowed disabled:opacity-50
// data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
// We leave out peer because RacSwitch wraps the switch in a <label> while shadcn uses a separate <label> that is pper to the switch.
const track = tv({
  extend: focusRing,
  base: 'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
  variants: {
    isSelected: {
      false: 'bg-input',
      true: 'bg-primary',
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-80', // opacity-50 does not visually match shadcn so we fudge.
    },
  },
})

// shadcn: pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform
// data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
const handle = tv({
  base: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
  variants: {
    isSelected: {
      false: 'translate-x-0',
      true: 'translate-x-5',
    },
    isDisabled: {
      true: '',
    },
  },
})

// RacSwitch wraps the switch in a <label> with a hidden <span> containing an <input> of type checkbox.
// The text of the label can be in the children of the switch.
// Shadcn/Radix wraps the switch in a <button>. Any <label> is a peer to the switch.
// Shadcn label: text-sm font-medium leading-none
// peer-disabled:cursor-not-allowed peer-disabled:opacity-70
export function OuiSwitch({ children, ...props }: OuiSwitchProps) {
  return (
    <Switch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        // 'group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]'
        'group flex items-center gap-2 text-sm font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70'
      )}>
      {(renderProps) => (
        <>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>
          {children}
        </>
      )}
    </Switch>
  )
}
