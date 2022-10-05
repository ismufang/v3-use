import { describe, it, expect, vi } from 'vitest'
import { useTimeout } from '../index'
import { delay } from '../../utils/testingHelpers'

describe('useTimeout', () => {
  it('show error with delay <= 0', () => {
    const fn = vi.fn()
    expect(() => useTimeout(fn, 0)).toThrowError()
    expect(() => useTimeout(fn, -1)).toThrowError()
  })

  it('can use Acitons', async () => {
    const fn = vi.fn()
    const { run, destroy } = useTimeout(fn, 100)
    expect(fn).toBeCalledTimes(0)
    run()
    await delay(120)
    expect(fn).toBeCalledTimes(1)
    run()
    expect(fn).toBeCalledTimes(1)
    await delay(120)
    expect(fn).toBeCalledTimes(2)
    destroy()
    run()
    expect(fn).toBeCalledTimes(2)
    await delay(120)
    expect(fn).toBeCalledTimes(3)
  })
})
