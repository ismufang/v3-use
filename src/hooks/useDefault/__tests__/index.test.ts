import { describe, it, expect } from 'vitest'
import { useDefault } from '../index'

describe('useDefault', () => {
  it('should work', () => {
    const [state, setState] = useDefault<number | null | undefined>(0, 100)
    expect(state.value).toBe(100)
    setState(null)
    expect(state.value).toBe(0)
    setState(undefined)
    expect(state.value).toBe(0)
    setState(11)
    expect(state.value).toBe(11)
  })
})
