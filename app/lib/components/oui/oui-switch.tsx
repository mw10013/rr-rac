import type { SwitchProps } from 'react-aria-components'
import React from 'react'
import { Switch } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './oui-base'
import { ouiLabel } from './oui-field'

export interface OuiSwitchProps extends Omit<SwitchProps, 'children'> {
  children?: React.ReactNode
}

// shadcn: "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
const ouiSwitchTrack = tv({
  extend: focusRing,
  base: 'inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors ',
  variants: {
    isSelected: {
      false: 'bg-input',
      true: 'bg-primary',
    },
    isDisabled: {
      // shadcn uses disabled:opacity-50. Use opacity-[0.714] since parent (ouiLabel) uses opacity-70
      true: 'group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-[0.714]',
    },
  },
})

// shadcn: "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
const ouiSwitchThumb = tv({
  base: 'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
  variants: {
    isSelected: {
      false: 'translate-x-0',
      true: 'translate-x-4',
    },
  },
})

// rac structures a switch with a <label>
// shadcn structures a switch in a <button>. Any <label> is a peer to the switch.
// TODO: OuiSwitch focus ring
export function OuiSwitch({ children, ...props }: OuiSwitchProps) {
  return (
    <Switch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        `${ouiLabel} flex items-center gap-2`
      )}>
      {(renderProps) => (
        <>
          <div className={ouiSwitchTrack(renderProps)}>
            <span className={ouiSwitchThumb(renderProps)} />
          </div>
          {children}
        </>
      )}
    </Switch>
  )
}
