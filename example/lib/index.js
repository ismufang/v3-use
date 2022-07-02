import { ref, watch, onBeforeUnmount, onMounted, onUpdated } from 'vue'

function useState(initialValue) {
  var state = ref(
    initialValue instanceof Function ? initialValue() : initialValue
  )
  var setState = function (value) {
    state.value = value instanceof Function ? value(state.value) : value
  }
  return [state, setState]
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __read(o, n) {
  var m = typeof Symbol === 'function' && o[Symbol.iterator]
  if (!m) return o
  var i = m.call(o),
    r,
    ar = [],
    e
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
  } catch (error) {
    e = { error: error }
  } finally {
    try {
      if (r && !r.done && (m = i['return'])) m.call(i)
    } finally {
      if (e) throw e.error
    }
  }
  return ar
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i)
        ar[i] = from[i]
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from))
}

function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1]
  var reverseValueOrigin =
    reverseValue === undefined ? !defaultValue : reverseValue
  var toggle = function () {
    return setState(function (s) {
      return s === defaultValue ? reverseValueOrigin : defaultValue
    })
  }
  var set = function (value) {
    return setState(value)
  }
  var setLeft = function () {
    return setState(defaultValue)
  }
  var setRight = function () {
    return setState(reverseValueOrigin)
  }
  return [
    state,
    { toggle: toggle, set: set, setLeft: setLeft, setRight: setRight },
  ]
}

function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false
  }
  var _a = __read(useToggle(defaultValue), 2),
    state = _a[0],
    _b = _a[1],
    toggle = _b.toggle,
    set = _b.set
  var setTrue = function () {
    return set(true)
  }
  var setFalse = function () {
    return set(false)
  }
  return [state, { toggle: toggle, setFalse: setFalse, setTrue: setTrue }]
}

function getTargetValue(val, options) {
  if (options === void 0) {
    options = {}
  }
  var min = options.min,
    max = options.max
  var target = val
  if (typeof max === 'number') {
    target = Math.min(max, target)
  }
  if (typeof min === 'number') {
    target = Math.max(min, target)
  }
  return target
}
function useCounter(initialValue, options) {
  if (initialValue === void 0) {
    initialValue = 0
  }
  if (options === void 0) {
    options = {}
  }
  var min = options.min,
    max = options.max
  var _a = __read(
      useState(function () {
        return getTargetValue(initialValue, {
          min: min,
          max: max,
        })
      }),
      2
    ),
    current = _a[0],
    setCurrent = _a[1]
  var setValue = function (value) {
    setCurrent(function (c) {
      var target = value instanceof Function ? value(c) : value
      return getTargetValue(target, {
        max: max,
        min: min,
      })
    })
  }
  var inc = function (delta) {
    if (delta === void 0) {
      delta = 1
    }
    setValue(function (c) {
      return c + delta
    })
  }
  var dec = function (delta) {
    if (delta === void 0) {
      delta = 1
    }
    setValue(function (c) {
      return c - delta
    })
  }
  var set = function (value) {
    setValue(value)
  }
  var reset = function () {
    setValue(initialValue)
  }
  return [current, { inc: inc, dec: dec, set: set, reset: reset }]
}

var isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

function useTitle(title) {
  var _a = __read(useState(isBrowser ? document.title : ''), 2),
    state = _a[0],
    setState = _a[1]
  var setTitle = function (value) {
    setState(value instanceof Function ? value(state.value) : value)
  }
  title && setTitle(title)
  watch(state, function (newVal) {
    document.title = newVal
  })
  return [state, setTitle]
}

function useTimeout(fn, delay) {
  if (typeof delay !== 'number' || delay <= 0) return
  var timer = setTimeout(function () {
    fn()
  }, delay)
  onBeforeUnmount(function () {
    clearTimeout(timer)
  })
}

function useInterval(fn, delay, options) {
  var immediate =
    options === null || options === void 0 ? void 0 : options.immediate
  if (typeof delay !== 'number' || delay <= 0) return
  immediate && fn()
  var timer = setInterval(function () {
    fn()
  }, delay)
  onBeforeUnmount(function () {
    clearInterval(timer)
  })
}

function useMethods(createMethods, initialState) {
  var reducer = function (reducerState, action) {
    var _a
    return (_a = createMethods(reducerState))[action.type].apply(
      _a,
      __spreadArray([], __read(action.payload), false)
    )
  }
  var _a = __read(useReducer(reducer, initialState), 2),
    state = _a[0],
    dispatch = _a[1]
  var actionTypes = Object.keys(createMethods(initialState))
  var wrappedMethods = actionTypes.reduce(function (acc, type) {
    acc[type] = function () {
      var payload = []
      for (var _i = 0; _i < arguments.length; _i++) {
        payload[_i] = arguments[_i]
      }
      return dispatch({ type: type, payload: payload })
    }
    return acc
  }, {})
  return [state, wrappedMethods]
}

function useReducer(reducer, initialState, initializer) {
  var _a = __read(
      useState(initializer ? initializer(initialState) : initialState),
      2
    ),
    state = _a[0],
    setState = _a[1]
  var dispatch = function (action) {
    var newValue = reducer(state.value, action)
    if (newValue && !Object.is(state.value, newValue)) {
      setState(newValue)
    }
  }
  return [state, dispatch]
}

function calcLeft(left, format) {
  return format && typeof format === 'function' ? format(left) : left
}
function useCountDown(options) {
  var _a = options !== null && options !== void 0 ? options : {},
    _b = _a.defaultValue,
    defaultValue = _b === void 0 ? 0 : _b,
    _c = _a.interval,
    interval = _c === void 0 ? 1000 : _c,
    _d = _a.step,
    step = _d === void 0 ? 1000 : _d,
    onEnd = _a.onEnd,
    format = _a.format
  var _e = __read(useState(0), 2),
    count = _e[0],
    setCount = _e[1]
  var _f = __read(useState(defaultValue), 2),
    timeLeft = _f[0],
    setTimeLeft = _f[1]
  var timer = null
  var _clearTimer = function () {
    timer && clearInterval(timer) && (timer = null)
  }
  var pause = function () {
    _clearTimer()
  }
  var stop = function () {
    _clearTimer()
    setCount(0)
  }
  var isEnd = function () {
    if (count.value === 0) {
      _clearTimer()
      onEnd === null || onEnd === void 0 ? void 0 : onEnd()
      return true
    }
    return false
  }
  var start = function (t) {
    _clearTimer()
    setCount(
      t
        ? t
        : defaultValue !== null && defaultValue !== void 0
        ? defaultValue
        : 0
    )
    if (isEnd()) return
    timer = setInterval(function () {
      setCount(function (state) {
        return state - step
      })
      isEnd()
    }, interval)
  }
  var play = function () {
    start(count.value)
  }
  watch(count, function (val) {
    setTimeLeft(calcLeft(val, format))
  })
  onMounted(function () {
    _clearTimer()
  })
  return [timeLeft, { start: start, pause: pause, play: play, stop: stop }]
}

function useEffect(effect, deps) {
  var destructor
  var hook = function () {
    destructor === null || destructor === void 0 ? void 0 : destructor()
    var fn = effect()
    if (fn && typeof fn === 'function' && !destructor) {
      destructor = fn
    }
  }
  if (!deps) {
    // https://github.com/vuejs/core/issues/4686
    // beforeUpdate/updated not triggered on component when slot content in child component changes #4686
    onUpdated(effect)
  } else if (deps.length === 0) {
    onMounted(hook)
    onBeforeUnmount(function () {
      destructor === null || destructor === void 0 ? void 0 : destructor()
    })
  } else {
    watch(deps, hook, {
      immediate: true,
    })
  }
}

function useLogger(componentName) {
  var rest = []
  for (var _i = 1; _i < arguments.length; _i++) {
    rest[_i - 1] = arguments[_i]
  }
  useEffectOnce(function () {
    console.log.apply(
      console,
      __spreadArray([''.concat(componentName, ' mounted')], __read(rest), false)
    )
    return function () {
      return console.log(''.concat(componentName, ' unMounted'))
    }
  })
  useUpdateEffect(function () {
    console.log.apply(
      console,
      __spreadArray([''.concat(componentName, ' updated')], __read(rest), false)
    )
  })
}

var useEffectOnce = function (effect) {
  useEffect(effect, [])
}

var useUpdateEffect = function (effect, deps) {
  var isFirstMount = useFirstMountState()
  useEffect(function () {
    if (!isFirstMount.value) {
      return effect()
    }
  }, deps)
}

function useFirstMountState() {
  var isFirst = ref(true)
  onMounted(function () {
    isFirst.value = false
  })
  return isFirst
}

export {
  useBoolean,
  useCountDown,
  useCounter,
  useEffect,
  useEffectOnce,
  useFirstMountState,
  useInterval,
  useLogger,
  useMethods,
  useReducer,
  useState,
  useTimeout,
  useTitle,
  useToggle,
  useUpdateEffect,
}
