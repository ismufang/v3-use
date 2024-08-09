# useStepper

管理步骤器的 Hook

## Usage

```ts
import { useStepper } from 'v3-use'
const { currentStep, toEnd, toStart, toNext, toPrev } = useStepper({
  defaultValue: 1,
  min: 0,
  max: 3
})
```

## Reference

### Type Declarations

```ts
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
export declare function useStepper(options: Options): UseStepperResult
```
