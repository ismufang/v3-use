import { Ref, watch } from "vue"
import { useState } from ".."

type CreateMethods<M, T> = (state: T) => {
    [P in keyof M]: (payload?: any) => T
}

type WrappedMethods<M> = {
    [P in keyof M]: (...payload: any) => void
}

function useMethods<M, T> (createMethods: CreateMethods<M, T>, initialState: T): [Ref<T>, WrappedMethods<M>] {
    const [state, setState] = useState<T>(initialState)

    let methods: WrappedMethods<M> = createMethods(state.value)
    const actionTypes = Object.keys(createMethods(initialState));
    
    const wrappedMethods: WrappedMethods<M> = actionTypes.reduce((ac, type) => {
        ac[type] = (...payload: any) => {
            const value = methods[type](...payload)
            setState(value)
            return value as T 
        }
        return ac
    }, {} as WrappedMethods<M>)

    watch(state, (newVal) => {
        methods = createMethods(state.value)
    })
    return [state, wrappedMethods]
}

export default useMethods