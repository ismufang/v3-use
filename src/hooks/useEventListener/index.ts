import { onScopeDispose, Ref, unref, watch } from 'vue'

export type TargetEl = Window | Document | HTMLElement
export type ListenerOptions = boolean | AddEventListenerOptions
export type Listener = EventListenerOrEventListenerObject

export interface Options {
  target?: TargetEl | Ref<TargetEl> | Ref<any>
  listenerOptions?: ListenerOptions
  manual?: boolean
}

export function useEventListener(
  name: string,
  listener: Listener | Listener[],
  options?: Options
) {
  const listeners = Array.isArray(listener) ? listener : [listener]
  const { manual, listenerOptions, target = window } = options ?? {}
  let _target = unref(target) as TargetEl
  const cleanups: Function[] = []

  const cleanup = () => {
    cleanups.forEach(cleanup => cleanup())
    cleanups.length = 0
  }

  const register = (
    name: string,
    listener: Listener,
    listenerOptions?: ListenerOptions
  ) => {
    _target?.addEventListener?.(name, listener, listenerOptions)
    return () => {
      _target?.removeEventListener?.(name, listener, listenerOptions)
    }
  }

  const init = () => {
    if (cleanups.length) {
      return
    }
    cleanups.push(
      ...listeners.map(listener => register(name, listener, listenerOptions))
    )
  }

  const stopWatch = watch(
    () => unref(target),
    el => {
      cleanup()
      if (!el) {
        return
      }
      _target = el
      !manual && init()
    },
    {
      immediate: true,
      flush: 'post'
    }
  )

  const clear = () => {
    stopWatch()
    cleanup()
  }

  onScopeDispose?.(clear)

  return {
    init,
    clear
  }
}
