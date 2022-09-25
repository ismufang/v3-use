import { describe, it, expect } from 'vitest'
import { useReducer } from '../index'

type State = {
  count: number
}

type Action = {
  type: string
  payload?: any
}

describe('useReducer', () => {
  const initialCount = {
    count: 0
  }

  const init = (state: State) => {
    return { count: state.count + 1 }
  }

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'reset':
        return init(action.payload)
      default:
        throw new Error()
    }
  }
  it('can use actions', () => {
    const [state, dispatch] = useReducer(reducer, initialCount)
    expect(state.value).toEqual({ count: 0 })
    dispatch({ type: 'increment' })
    expect(state.value).toEqual({ count: 1 })
    dispatch({ type: 'decrement' })
    expect(state.value).toEqual({ count: 0 })
    dispatch({ type: 'reset', payload: { count: 100 } })
    expect(state.value).toEqual({ count: 101 })
  })

  it('can use actions with initializer', () => {
    const [state, dispatch] = useReducer(reducer, initialCount, init)
    expect(state.value).toEqual({ count: 1 })
    dispatch({ type: 'increment' })
    expect(state.value).toEqual({ count: 2 })
    dispatch({ type: 'decrement' })
    expect(state.value).toEqual({ count: 1 })
    dispatch({ type: 'reset', payload: { count: 100 } })
    expect(state.value).toEqual({ count: 101 })
  })
})
