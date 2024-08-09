import { computed, ComputedRef, Ref } from 'vue'
import { useCounter, ValueParam } from '../useCounter'

export interface Options {
  max: number
  min?: number
  defaultValue?: number
}

export interface UseStepperResult {
  currentStep: Ref<number>
  isStart: ComputedRef<boolean>
  isEnd: ComputedRef<boolean>
  setCurrentStep: (value: ValueParam) => void
  reset: () => void
  toPrev: () => void
  toNext: () => void
  toStart: () => void
  toEnd: () => void
}

export function useStepper(options: Options): UseStepperResult {
  const { defaultValue = 0, min = 0, max = 0 } = options
  const [currentStep, { inc, dec, set: setCurrentStep, reset }] = useCounter(
    defaultValue,
    {
      min,
      max
    }
  )

  const isStart = computed(() => currentStep.value === min)
  const isEnd = computed(() => currentStep.value === max)

  const toPrev = () => dec()
  const toNext = () => inc()
  const toStart = () => setCurrentStep(min)
  const toEnd = () => setCurrentStep(max)

  return {
    currentStep,
    isStart,
    isEnd,
    setCurrentStep,
    reset,
    toPrev,
    toNext,
    toStart,
    toEnd
  }
}
