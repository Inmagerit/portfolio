const authReducer = require('../../src/redux/slices/authSlice').default;
const { logIn, logOut } = require('../../src/redux/slices/authSlice');


describe('authSlice', () => {
    const initialState = {
        userIsLogged: false
    };

    it('should return the initial state when passed an empty action', () => {
        const nextState = authReducer(undefined, { type: '' });
        expect(nextState).toEqual(initialState);
    });

    it('should handle logIn action', () => {
        const nextState = authReducer(initialState, logIn());
        expect(nextState.userIsLogged).toBe(true);
    });

    it('should handle logOut action', () => {
        const loggedInState = { userIsLogged: true };
        const nextState = authReducer(loggedInState, logOut());
        expect(nextState.userIsLogged).toBe(false);
    });
});
