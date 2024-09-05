const counterReducer = require('../../src/redux/slices/counterSlice').default;
const { increment, decrement } = require('../../src/redux/slices/counterSlice');

describe('counterSlice', () => {
    const initialState = {
        counter: 0,
    };

    it('should return the initial state when passed an empty action', () => {
        const nextState = counterReducer(undefined, { type: '' });
        expect(nextState).toEqual(initialState);
    });

    it('should handle increment action', () => {
        const nextState = counterReducer(initialState, increment());
        expect(nextState.counter).toBe(1);
    });

    it('should handle decrement action', () => {
        const nextState = counterReducer({ counter: 2 }, decrement());
        expect(nextState.counter).toBe(1);
    });
});
