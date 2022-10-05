import { describe, it, expect, vi } from 'vitest'
import { useInterval } from '../index'
import { delay } from '../../utils/testingHelpers'

describe('useInterval', () => {
  it('options: immediate = true', async () => {
    const fn = vi.fn()
    useInterval(fn, 100, { immediate: true })
    await delay(120)
    expect(fn).toBeCalledTimes(2)
  })

  it('show error with delay <= 0', () => {
    const fn = vi.fn()
    expect(() => useInterval(fn, 0)).toThrowError()
    expect(() => useInterval(fn, -1)).toThrowError()
  })

  it('can use Acitons', async () => {
    const fn = vi.fn()
    const { run, destroy } = useInterval(fn, 100)
    await delay(120)
    expect(fn).toBeCalledTimes(0)
    run()
    await delay(120)
    expect(fn).toBeCalledTimes(1)
    run(true)
    expect(fn).toBeCalledTimes(1)
    await delay(0)
    expect(fn).toBeCalledTimes(1)
    destroy()
    run(true)
    expect(fn).toBeCalledTimes(2)
    await delay(120)
    expect(fn).toBeCalledTimes(3)
  })
})
