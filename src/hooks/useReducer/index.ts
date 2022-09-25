import { Ref } from 'vue'
import { isFunction } from '../utils/index'
import { useState } from '../useState'

export type Reducer<S, A> = (prevState: S, action: A) => S
export type ReducerState<R extends Reducer<any, any>> = R extends Reducer<
  infer S,
  any
>
  ? S
  : never
export type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
  any,
  infer A
>
  ? A
  : never

export type Dispatch<A> = (value: A) => void

export function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initialState: I,
  initializer?: (arg: I) => ReducerState<R>
): [Ref<ReducerState<R>>, Dispatch<ReducerAction<R>>]

export function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initialState: I,
  initializer?: (arg: I) => ReducerState<R>
) {
  const [state, setState] = useState(
    (isFunction(initializer) ? initializer(initialState) : initialState) as I
  )
  const dispatch: Dispatch<ReducerAction<R>> = (action: ReducerAction<R>) => {
    const newValue = reducer(state.value, action)
    if (newValue && !Object.is(state.value, newValue)) {
      setState(newValue)
    }
  }
  return [state, dispatch]
}
