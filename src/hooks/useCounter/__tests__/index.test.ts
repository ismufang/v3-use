import { describe, it, expect } from 'vitest'
import { useCounter } from '../index'

describe('useCounter', () => {
  it('should work without initial value', () => {
    const [state, { inc }] = useCounter()
    expect(state.value).toBe(0)
    inc()
    expect(state.value).toBe(1)
  })

  it('can use actions change state', () => {
    const [state, { inc, dec, set, reset }] = useCounter(1)
    expect(state.value).toBe(1)
    inc()
    expect(state.value).toBe(2)
    inc(2)
    expect(state.value).toBe(4)
    dec()
    expect(state.value).toBe(3)
    dec(2)
    expect(state.value).toBe(1)
    set(10)
    expect(state.value).toBe(10)
    reset()
    expect(state.value).toBe(1)
  })

  it('can set min and max value', () => {
    const [state, { set }] = useCounter(0, {
      min: 1,
      max: 4
    })
    expect(state.value).toBe(1)
    set(5)
    expect(state.value).toBe(4)
    set(2)
    expect(state.value).toBe(2)
    set(0)
    expect(state.value).toBe(1)
  })
})
