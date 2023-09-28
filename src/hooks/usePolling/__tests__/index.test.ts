import { describe, it, expect } from 'vitest'
import { delay } from '../../utils/testingHelpers'
import { usePolling } from '..'

describe('usePolling', () => {
  it('should not work when interval <= 0', async () => {
    const { polling, initPolling } = usePolling()
    initPolling(() => {}, 0)
    expect(polling.value).toBeNull()
  })

  it('auto polling', async () => {
    let count = 0
    const { initPolling } = usePolling()
    initPolling(() => count++, 10, { manual: false, immediate: true })
    expect(count).toBe(1)
    await delay(12)
    expect(count).toBe(2)
  })

  it('manual polling', async () => {
    let count = 0
    const { polling, initPolling } = usePolling()
    initPolling(() => count++, 10, { manual: true, immediate: false })
    expect(count).toBe(0)
    polling.value?.run()
    await delay(12)
    expect(count).toBe(1)
    polling.value?.destroy()
    await delay(12)
    expect(count).toBe(1)
  })
})
