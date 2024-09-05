const shoppingCartReducer = require('../../src/redux/slices/shoppingCartSlice').default;
const { addProduct, removeProduct, clearCart } = require('../../src/redux/slices/shoppingCartSlice');

describe('shoppingCartSlice', () => {
    const initialState = {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
    };

    it('should return the initial state when passed an empty action', () => {
        const nextState = shoppingCartReducer(undefined, { type: '' });
        expect(nextState).toEqual(initialState);
    });

    it('should handle addProduct action when the product is not already in the cart', () => {
        const product = { id: 1, name: 'Product 1', price: 100 };
        const nextState = shoppingCartReducer(initialState, addProduct(product));
        
        expect(nextState.products.length).toBe(1);
        expect(nextState.products[0].id).toBe(product.id);
        expect(nextState.totalPrice).toBe(100);
        expect(nextState.totalQuantity).toBe(1);
    });

    it('should handle addProduct action when the product is already in the cart', () => {
        const stateWithProduct = {
            products: [{ id: 1, name: 'Product 1', price: 100, aux: 100 }],
            totalPrice: 100,
            totalQuantity: 1,
        };
        const product = { id: 1, price: 100 };
        const nextState = shoppingCartReducer(stateWithProduct, addProduct(product));
        
        expect(nextState.products.length).toBe(1);
        expect(nextState.products[0].aux).toBe(200);
        expect(nextState.totalPrice).toBe(200);
        expect(nextState.totalQuantity).toBe(2);
    });

    it('should handle removeProduct action', () => {
        const stateWithProduct = {
            products: [{ id: 1, name: 'Product 1', price: 100, aux: 100 }],
            totalPrice: 100,
            totalQuantity: 1,
        };
        const nextState = shoppingCartReducer(stateWithProduct, removeProduct({ id: 1 }));
        
        expect(nextState.products.length).toBe(1);
        expect(nextState.totalPrice).toBe(0);
        expect(nextState.totalQuantity).toBe(0);
    });

    it('should handle clearCart action', () => {
        const stateWithProducts = {
            products: [{ id: 1, name: 'Product 1', price: 100, aux: 100 }],
            totalPrice: 100,
            totalQuantity: 1,
        };
        const nextState = shoppingCartReducer(stateWithProducts, clearCart());
        
        expect(nextState.products.length).toBe(0);
        expect(nextState.totalPrice).toBe(0);
        expect(nextState.totalQuantity).toBe(0);
    });
});
