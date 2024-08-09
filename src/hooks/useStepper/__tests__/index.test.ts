import { describe, it, expect } from 'vitest'
import { useStepper } from '../index'

describe('useState', () => {
  it('should work without default value', () => {
    const {
      currentStep,
      setCurrentStep,
      isStart,
      isEnd,
      toEnd,
      toNext,
      toPrev,
      toStart,
      reset
    } = useStepper({
      max: 3
    })
    expect(currentStep.value).toBe(0)
    setCurrentStep(2)
    expect(currentStep.value).toBe(2)
    expect(isStart.value).toBe(false)
    expect(isEnd.value).toBe(false)
    toEnd()
    expect(isEnd.value).toBe(true)
    toStart()
    expect(isStart.value).toBe(true)
    toNext()
    expect(currentStep.value).toBe(1)
    toNext()
    expect(currentStep.value).toBe(2)
    toPrev()
    expect(currentStep.value).toBe(1)
    reset()
    expect(currentStep.value).toBe(0)
  })
  it('should work with default value', () => {
    const { currentStep, reset, toStart } = useStepper({
      defaultValue: 1,
      min: 0,
      max: 3
    })
    expect(currentStep.value).toBe(1)
    toStart()
    expect(currentStep.value).toBe(0)
    reset()
    expect(currentStep.value).toBe(1)
  })
})
