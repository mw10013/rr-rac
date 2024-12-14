import { type FieldErrorProps, Group, type GroupProps, type InputProps, type LabelProps, FieldError as RACFieldError, Input as RACInput, Label as RACLabel, Text, type TextProps, composeRenderProps } from "react-aria-components";
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { composeTailwindRenderProps, focusRing } from "./utils";

export function Label(props: LabelProps) {
  return <RACLabel {...props} className={twMerge('text-sm text-gray-500 dark:text-zinc-400 font-medium cursor-default w-fit', props.className)} />;
}

export function Description(props: TextProps) {
  return <Text {...props} slot="description" className={twMerge('text-sm text-gray-600', props.className)} />;
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A component that renders an error message for a form field.
 *
 * @param props - A `FieldErrorProps` object with the following properties:
 *   - `className` - Additional CSS classes to apply to the error message.
 *   - `children` - The error message to display.
 *   - `state` - The validation state of the field. If `state` is `"invalid"`, the error message will be displayed.
 *
 * The component will be rendered with the following styles:
 *   - `text-sm`
 *   - `text-red-600`
 *   - `forced-colors:text-[Mark]`
 *
 * The component will also be wrapped in a `span` element with the following aria attributes:
 *   - `role="alert"`
 *   - `aria-live="assertive"`
 *   - `aria-atomic="true"`
 */
/******  82a7ed5d-2106-403a-b991-ba1fbcb7f122  *******/
export function FieldError(props: FieldErrorProps) {
  return <RACFieldError {...props} className={composeTailwindRenderProps(props.className, 'text-sm text-red-600 forced-colors:text-[Mark]')} />
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: 'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]'
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]'
    }
  }
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: 'group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden',
  variants: fieldBorderStyles.variants
});

export function FieldGroup(props: GroupProps) {
  return <Group {...props} className={composeRenderProps(props.className, (className, renderProps) => fieldGroupStyles({...renderProps, className}))} />;
}

export function Input(props: InputProps) {
  return <RACInput {...props} className={composeTailwindRenderProps(props.className, 'px-2 py-1.5 flex-1 min-w-0 outline outline-0 bg-white dark:bg-zinc-900 text-sm text-gray-800 dark:text-zinc-200 disabled:text-gray-200 dark:disabled:text-zinc-600')} />
}
