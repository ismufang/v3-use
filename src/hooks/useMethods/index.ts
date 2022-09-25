import { Ref } from 'vue'
import { useReducer } from '../useReducer'

export type ReducerAction<T = string, P = any> = {
  type: T
  payload?: P
}

export type CreateMethods<M, T> = (state: T) => {
  [P in keyof M]: (payload?: any) => T
}

export type WrappedMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}

export function useMethods<M, T>(
  createMethods: CreateMethods<M, T>,
  initialState: T
): [Ref<T>, WrappedMethods<M>] {
  const reducer = (reducerState: T, action: ReducerAction<keyof M, any>) => {
    return createMethods(reducerState)[action.type](...action.payload)
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const actionTypes = Object.keys(createMethods(initialState)) as Array<keyof M>
  const wrappedMethods: WrappedMethods<M> = actionTypes.reduce((acc, type) => {
    acc[type] = (...payload) => dispatch({ type, payload })
    return acc
  }, {} as WrappedMethods<M>)

  return [state, wrappedMethods]
}
