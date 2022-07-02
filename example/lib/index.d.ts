import { Ref } from 'vue'

declare type ValueParam<T> = T | ((c: T) => T)
declare function useState<T>(
  value?: T | (() => T) | undefined
): [Ref<T>, (value: ValueParam<T>) => void]

interface Actions$3<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}
declare function useToggle<T = boolean>(): [Ref<boolean>, Actions$3<T>]
declare function useToggle<T>(defaultValue: T): [Ref<T>, Actions$3<T>]
declare function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [Ref<T | U>, Actions$3<T | U>]

interface Actions$2 {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}
declare function useBoolean(defaultValue?: boolean): [Ref<boolean>, Actions$2]

interface Options$1 {
  min?: number
  max?: number
}
interface Actions$1 {
  inc: (delta?: number) => void
  dec: (delta?: number) => void
  set: (value: number | ((c: number) => number)) => void
  reset: () => void
}
declare function useCounter(
  initialValue?: number,
  options?: Options$1
): [Ref<number>, Actions$1]

declare function useTitle(
  title?: string | undefined
): [Ref<string>, (value: string | ((c: string) => string)) => void]

declare function useTimeout(fn: () => void, delay: number): void

declare function useInterval(
  fn: () => void,
  delay: number,
  options?: {
    immediate?: boolean
  }
): void

declare type CreateMethods<M, T> = (state: T) => {
  [P in keyof M]: (payload?: any) => T
}
declare type WrappedMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}
declare function useMethods<M, T>(
  createMethods: CreateMethods<M, T>,
  initialState: T
): [Ref<T>, WrappedMethods<M>]

declare type Reducer<S, A> = (prevState: S, action: A) => S
declare type ReducerState<R extends Reducer<any, any>> = R extends Reducer<
  infer S,
  any
>
  ? S
  : never
declare type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
  any,
  infer A
>
  ? A
  : never
declare type Dispatch<A> = (value: A) => void
declare function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>
): [Ref<ReducerState<R>>, Dispatch<ReducerAction<R>>]

declare type Options = {
  defaultValue?: number
  interval?: number
  step?: number
  format?: (left: number) => number
  onEnd?: () => void
}
declare type Actions = {
  start: (t?: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}
declare function useCountDown(options?: Options): [Ref<number>, Actions]

declare const UNDEFINED_VOID_ONLY: unique symbol
declare type Destructor = () => void | {
  [UNDEFINED_VOID_ONLY]: never
}
declare type EffectCallback$1 = () => void | Destructor
declare type DependencyList = ReadonlyArray<any>
declare function useEffect(
  effect: EffectCallback$1,
  deps?: DependencyList
): void

declare function useLogger(componentName: string, ...rest: any[]): void

declare type EffectCallback = () => void | (() => void | undefined)
declare const useEffectOnce: (effect: EffectCallback) => void

declare const useUpdateEffect: typeof useEffect

declare function useFirstMountState(): Ref<boolean>

export {
  useBoolean,
  useCountDown,
  useCounter,
  useEffect,
  useEffectOnce,
  useFirstMountState,
  useInterval,
  useLogger,
  useMethods,
  useReducer,
  useState,
  useTimeout,
  useTitle,
  useToggle,
  useUpdateEffect,
}
