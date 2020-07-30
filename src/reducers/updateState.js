export const updateState = (oldState, newValues, shouldStateUpdate) => {
    if(!shouldStateUpdate)
        return oldState
    const newState = {
        ...oldState,
        ...newValues
    }

    return newState
}