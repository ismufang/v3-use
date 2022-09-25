import { describe, it, expect } from 'vitest'
import { useToggle } from '../index'

describe('useToggle', () => {
  it('should work without initial value', () => {
    const [state, { toggle }] = useToggle()
    expect(state.value).toBeFalsy()
    toggle()
    expect(state.value).toBeTruthy()
  })

  it('can use boolean', () => {
    const [state, { setLeft, setRight, set, toggle }] = useToggle(false)
    expect(state.value).toBeFalsy()
    setRight()
    expect(state.value).toBeTruthy()
    setLeft()
    expect(state.value).toBeFalsy()
    set(false)
    expect(state.value).toBeFalsy()
    toggle()
    expect(state.value).toBeTruthy()
  })

  it('can use custom value', () => {
    const [state, { setLeft, setRight, set, toggle }] = useToggle('a', 1)
    expect(state.value).toBe('a')
    setLeft()
    expect(state.value).toBe('a')
    setRight()
    expect(state.value).toBe(1)
    set('a')
    expect(state.value).toBe('a')
    toggle()
    expect(state.value).toBe(1)
    expect(() => set('b')).toThrowError()
  })
})
