import { describe, it, expect } from 'vitest'
import { useBoolean } from '../index'

describe('useState', () => {
  it('should work without default value', () => {
    const [state, { toggle }] = useBoolean()
    expect(state.value).toBeFalsy()
    toggle()
    expect(state.value).toBeTruthy()
  })

  it('can use actions change state', () => {
    const [state, { setFalse, setTrue, toggle }] = useBoolean(true)
    expect(state.value).toBeTruthy()

    setFalse()
    expect(state.value).toBeFalsy()
    setTrue()
    expect(state.value).toBeTruthy()
    toggle()
    expect(state.value).toBeFalsy()
    toggle()
    expect(state.value).toBeTruthy()
  })
})
