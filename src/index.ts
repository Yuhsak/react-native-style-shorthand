export type {
  Extend
} from './types/util'

export type {
  Restore,
  Shorten,
  SS,
  MAP,
  WithAnimatedValue
} from './types/style'

export type {
  RefType,
  StylePropValue,
  StyleValue,
  StyleInjectedProps,
  StyleEnhancedProps,
  ExtractSSType,
  PropsType,
  SSType,
  FC
} from './types/hoc'

export {
  useRestoredStyle,
  useStyleShorthand
} from './hooks'

import {
  create,
  useMemo,
  compose,
  flatten,
  restore
} from './stylesheet'

export const StyleSheet = {
  create,
  useMemo,
  compose,
  flatten,
  restore
}

export {
  fc,
  forwardRef,
  enhance,
  enhanceView,
  enhanceText,
  enhanceImage,
  enhanceWithRef,
  enhanceViewWithRef,
  enhanceTextWithRef,
  enhanceFlatList,
  enhanceSectionList,
  enhanceImageWithRef,
  enhanceAnimatedWithRef,
  enhanceAnimatedViewWithRef,
  enhanceAnimatedTextWithRef,
  enhanceAnimatedImageWithRef
} from './hoc'

export * from './component'