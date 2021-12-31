import { useState } from '..'
import { Ref } from 'vue'

export type Action<T = any, P = any> = { type: T; payload?: P }
export type Reducer<S, A> = (prevState: S, action: A) => S
export type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never
export type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never

export type Dispatch<A> = (value: A) => void

function useReducer<R extends Reducer<any, any>, I> (
  reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>
): [Ref<ReducerState<R>>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>, I> (
  reducer: R,
  initialState: I,
  initializer?: (arg: I) => ReducerState<R>
) {
  const [state, setState] = useState(
    (initializer ? initializer(initialState) : initialState) as I
  )
  const dispatch: Dispatch<ReducerAction<R>> = (action: ReducerAction<R>) => {
    const newValue = reducer(state.value, action)
    if (newValue && !Object.is(state.value, newValue)) {
      setState(newValue)
    }
  }
  return [state, dispatch]
}

export default useReducer
