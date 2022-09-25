import { describe, it, expect } from 'vitest'
import { useState } from '../index'

describe('useState', () => {
  it('should hold a value', () => {
    const [state, setState] = useState(1)
    expect(state.value).toBe(1)
    setState(2)
    expect(state.value).toBe(2)
  })

  it('can use fn return value', () => {
    const [state, setState] = useState(() => 1)
    expect(state.value).toBe(1)
    setState(c => c + 1)
    expect(state.value).toBe(2)
  })

  it('should work without initial value', () => {
    const [state, setState] = useState()
    expect(state.value).toBe(undefined)
    setState(1)
    expect(state.value).toBe(1)
  })
})
