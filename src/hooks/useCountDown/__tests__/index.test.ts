import { describe, it, expect, vi } from 'vitest'
import { delay } from '../../utils/testingHelpers'
import { useCountDown } from '../index'

describe('useCountDown', () => {
  it('cant not work without defaultTimeLeft or start(time = 0)', async () => {
    const onEnd = vi.fn()
    const [countdown, { start, stop }] = useCountDown({
      interval: 100,
      onEnd
    })
    start()
    expect(countdown.value).toBe(0)
    delay(120)
    expect(countdown.value).toBe(0)
    stop()
    expect(onEnd).toBeCalledTimes(0)
  })

  it('options: format', async () => {
    const [timeLeft, { start }] = useCountDown({
      interval: 100,
      defaultTimeLeft: 10,
      format: c => `timeLeft: ${c}`
    })
    expect(timeLeft.value).toBe('timeLeft: 10')
    start(10)
    await delay(120)
    expect(timeLeft.value).toBe('timeLeft: 9')
  })

  it('should work by actions', async () => {
    const onEnd = vi.fn()
    const [countdown, { start, pause, play, stop }] = useCountDown({
      interval: 100,
      step: 1,
      defaultTimeLeft: 10,
      onEnd
    })
    expect(countdown.value).toBe(10)
    start()
    expect(countdown.value).toBe(10)
    await delay(120)
    pause()
    expect(countdown.value).toBe(9)
    play()
    await delay(120)
    expect(countdown.value).toBe(8)
    stop()
    await delay(0)
    expect(countdown.value).toBe(0)
    expect(onEnd).toBeCalledTimes(1)
  })
})
