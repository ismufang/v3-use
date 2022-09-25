import { describe, it, expect } from 'vitest'
import { useMethods } from '../index'

describe('useMethods', () => {
  it('can use actions', () => {
    const initialCount = {
      count: 0
    }

    const reducer = (state: { count: number }) => {
      return {
        increment() {
          return { count: state.count + 1 }
        },
        decrement() {
          return { count: state.count - 1 }
        },
        reset() {
          return { count: 0 }
        }
      }
    }

    const [state, dispatch] = useMethods(reducer, initialCount)
    expect(state.value).toEqual({ count: 0 })
    dispatch.increment()
    expect(state.value).toEqual({ count: 1 })
    dispatch.increment()
    expect(state.value).toEqual({ count: 2 })
    dispatch.decrement()
    expect(state.value).toEqual({ count: 1 })
    dispatch.reset()
    expect(state.value).toEqual({ count: 0 })
  })
})
