import { describe, expect, it } from 'vitest'
import { useState } from '../src'

describe('useState', () => {
  it('test value', () => {
    const [state, setState] = useState('a')
    expect(state.value).toBe('a')

    setState('b')
    expect(state.value).toBe('b')

    setState(false)
    expect(state.value).toBe(false)

    setState(1)
    expect(state.value).toBe(1)

    const obj = { num: 1 }
    setState({ num: 1 })
    expect(state.value).toStrictEqual(obj)
  })

  it('test function', () => {
    const [state, setState] = useState(() => 'a')
    expect(state.value).toBe('a')

    setState((val) => val + 'c')
    expect(state.value).toBe('ac')
  })

  it('test on no default value', () => {
    const [state, setState] = useState()
    expect(state.value).toBeUndefined()

    setState(123)
    expect(state.value).toBe(123)
  })
})
