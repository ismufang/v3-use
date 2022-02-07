import { Component } from 'vue'
import * as Hooks from '../components'

export function getHooks() {
  return Object.keys(Hooks).map((key) => {
    const path = key.replace(
      /(^\w?)(\w+$)/,
      (rs, v1: string, v2: string) => `${v1.toLowerCase()}${v2}`
    )
    return {
      path: `/${path}`,
      name: key,
      component: (Hooks as Record<string, Component>)[key],
    }
  })
}
