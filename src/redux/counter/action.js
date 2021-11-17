export const increment = () => {
    return {
        type: "counter/increment",
        payload: 1,
    }
}

export const decrement = () => {
    return {
        type: "counter/decrement",
        payload: 1,
    }
}
