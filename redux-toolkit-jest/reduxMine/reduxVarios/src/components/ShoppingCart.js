import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, updateQuantity, clearCart } from './shoppingCartSlice';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart);

    //const handleAddProduct = (product) => {
    //    dispatch(addProduct({ id: product.id, price: product.price, quantity: 1 }));
    //};

    const handleRemoveProduct = (productId) => {
        dispatch(removeProduct({ id: productId }));
    };

    const handleUpdateQuantity = (productId, quantity) => {
        dispatch(updateQuantity({ id: productId, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.products.map((product) => (
                <div key={product.id}>
                    <h4>{product.name}</h4>
                    <p>Quantity: {product.quantity}</p>
                    <p>Total Price: ${product.totalPrice}</p>
                    <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                    <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>Increase Quantity</button>
                    <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>Decrease Quantity</button>
                </div>
            ))}
            <div>
                <h3>Total Quantity: {cart.totalQuantity}</h3>
                <h3>Total Price: ${cart.totalPrice}</h3>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
