
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct,clearCart } from '../redux/slices/shoppingCartSlice';  // Ajusta la ruta según tu estructura

const ShoppingCartDisplay = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Accede al estado del carrito

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct({id: product.id,
                price: product.price,
                image:product.image,
                title:product.title,
                description:product.description,}));  // Despacha la acción para eliminar un producto por su ID
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <ul>
        {cart.products.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cart.products.map((product) => (
            <li key={product.id}>
              { product.price !== 0 && product.price !== 0 && (
  <>
    {`${ product.aux} `}
    <img 
      src={product.image} 
      alt={product.name} 
      height='50px' 
      width='50px'
      
    />
    {product.name}
    <button onClick={() => handleRemoveProduct(product)}>Remove</button>

    
  </>
)}
 
              
            </li>
          ))
        )}
      </ul>
      <div>
        <h3>Total Price: ${cart.totalPrice}</h3>
        <h3>Total Quantity: {cart.totalQuantity}</h3>
      </div>
    </div>
  );
};

export default ShoppingCartDisplay;
