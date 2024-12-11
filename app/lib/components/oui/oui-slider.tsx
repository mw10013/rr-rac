import {
  Slider,
  type SliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { OuiLabel } from './oui-field';
import { composeTailwindRenderProps, focusRing } from './oui-base';

const trackStyles = tv({
  base: 'rounded-full',
  variants: {
    orientation: {
      horizontal: 'w-full h-[6px]',
      vertical: 'h-full w-[6px] ml-[50%] -translate-x-[50%]'
    },
    isDisabled: {
      false: 'bg-gray-300 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder]',
      true: 'bg-gray-100 dark:bg-zinc-800 forced-colors:bg-[GrayText]'
    }
  }
});

const thumbStyles = tv({
  extend: focusRing,
  base: 'w-6 h-6 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3 rounded-full bg-gray-50 dark:bg-zinc-900 border-2 border-gray-700 dark:border-gray-300',
  variants: {
    isDragging: {
      true: 'bg-gray-700 dark:bg-gray-300 forced-colors:bg-[ButtonBorder]'
    },
    isDisabled: {
      true: 'border-gray-300 dark:border-zinc-700 forced-colors:border-[GrayText]'
    }
  }
});

export interface OuiSliderProps<T> extends SliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function OuiSlider<T extends number | number[]>(
  { label, thumbLabels, ...props }: OuiSliderProps<T>
) {
  return (
    <Slider {...props} className={composeTailwindRenderProps(props.className, 'orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-64')}>
      <OuiLabel>{label}</OuiLabel>
      <SliderOutput className="text-sm text-gray-500 dark:text-zinc-400 font-medium orientation-vertical:hidden">
        {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
      </SliderOutput>
      <SliderTrack className="group col-span-2 orientation-horizontal:h-6 orientation-vertical:w-6 orientation-vertical:h-64 flex items-center">
        {({ state, ...renderProps }) => <>
          <div className={trackStyles(renderProps)} />
          {state.values.map((_, i) => <SliderThumb key={i} index={i} aria-label={thumbLabels?.[i]} className={thumbStyles} />)}
        </>}
      </SliderTrack>
    </Slider>
  );
}