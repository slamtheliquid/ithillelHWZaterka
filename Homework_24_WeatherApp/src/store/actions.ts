export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNT = 'ADD_COUNT';

export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})
export const addCount = (payload: number) => ({
    type: ADD_COUNT,
    payload
})