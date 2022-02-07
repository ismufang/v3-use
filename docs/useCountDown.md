# useCountDown

一个用于管理倒计时的 Hook

## Usage

```vue
<template>
  <div>{{ countdown }}</div>
  <button @click="start(30)">start(30 * 1000)</button>
  <button @click="start(10)">start(10 * 1000)</button>
  <button @click="start()">start()</button>
  <button @click="pause()">pause()</button>
  <button @click="play()">play()</button>
  <button @click="stop()">stop()</button>
</template>

<script setup lang="ts">
import { useCountDown } from 'v3-use'

const [countdown, { start, pause, play, stop }] = useCountDown({
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
function useCountDown(options?: Options): [Ref<number>, Actions]

type Options = {
  defaultValue?: number
  interval?: number
  step?: number
  format?: (left: number) => number
  onEnd?: () => void
}

type Actions = {
  start: (t?: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}
```

### Params

- **`defaultValue`**_`: number`_ &mdash; 默认值 `0`
- **`interval`**_`: number`_ &mdash; 循环间隔，默认值 `1000`
- **`step`**_`: number`_ &mdash; 间隔尺寸，默认值 `1000`
- **`format`**_`: (left: number) => number`_ &mdash; 剩余时长格式化函数，默认值 `undefined`
- **`onEnd`**_`: () => void`_ &mdash; 结束钩子，默认值 `undefined`

### Result

- **`state`**_`: Ref<number>`_ &mdash; 剩余时间
- **`actions`**_`: Actions`_ &mdash; 操作集合

### Actions

- **`start`**_`: (t?: number) => void`_ &mdash; 初始化倒计时函数，可接收初始倒计时间，默认 `defaultValue | 0`
- **`pause`**_`: () => void`_ &mdash; 暂停倒计时函数
- **`play`**_`: () => void`_ &mdash; 继续倒计时函数
- **`stop`**_`: () => void`_ &mdash; 终止倒计时函数，倒计时归 `0`
