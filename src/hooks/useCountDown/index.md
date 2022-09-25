# useCountDown

一个用于管理倒计时的 Hook

## Usage

```ts
import { useCountDown } from 'v3-use'
const [timeLeft, { start, pause, play, stop }] = useCountDown({
  onEnd: () => {
    console.log('End of the time')
  },
  interval: 500,
  step: 1,
})
</script>
```

## Reference

```ts
const [timeLeft, { start, pause, play, stop }] = useCountDown<T>(options?: Options)
```

### Type Declarations

```ts
export declare type Options<T> = {
  defaultTimeLeft?: number
  interval?: number
  step?: number
  format?: (left: number) => T
  onEnd?: () => void
}
export declare type Actions = {
  start: (t?: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}
export declare function useCountDown<T>(options?: Options<T>): [Ref<T>, Actions]
```

### Params

- **`defaultTimeLeft`**_`: number`_ &mdash; 默认剩余时间 默认值 `0`
- **`interval`**_`: number`_ &mdash; 循环间隔(ms)，默认值 `1000`
- **`step`**_`: number`_ &mdash; 间隔尺寸，默认值 `1`
- **`format`**_`: (left: number) => T`_ &mdash; 剩余时长格式化函数，默认值 `undefined`
- **`onEnd`**_`: () => void`_ &mdash; 结束钩子，默认值 `undefined`

### Result

- **`state`**_`: Ref<T>`_ &mdash; 剩余时间
- **`actions`**_`: Actions`_ &mdash; 操作集合

### Actions

- **`start`**_`: (t?: number) => void`_ &mdash; 初始化倒计时函数，可接收初始倒计时间，默认 `defaultTimeLeft`
- **`pause`**_`: () => void`_ &mdash; 暂停倒计时函数
- **`play`**_`: () => void`_ &mdash; 继续倒计时函数
- **`stop`**_`: () => void`_ &mdash; 终止倒计时函数，倒计时归 `0`
