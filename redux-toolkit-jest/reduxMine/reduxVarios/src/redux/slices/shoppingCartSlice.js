import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, price } = action.payload;

      const selectedProduct = state.products.find(product => product.id === id);
      
      if (selectedProduct) {
        // Verifica si `aux` existe, si no, lo inicializa
        if (!selectedProduct.aux) {
          selectedProduct.aux = 0;
        }
        selectedProduct.aux += price;
        state.totalQuantity += 1;
        state.totalPrice += price;

        console.log('Producto ya estaba en array', state.totalPrice);
      } else {
        // Agrega el nuevo producto al array
        state.products.push({
          ...action.payload,
          aux: price, // Asume que `aux` es una propiedad nueva que debes inicializar
          quantity: 1 // Asume que `quantity` es una propiedad para la cantidad del producto
        });
        state.totalQuantity += 1;
        state.totalPrice += price;

        console.log('Producto en array', state.totalPrice, state.totalQuantity);
      }
    },

    removeProduct: (state, action) => {
      const { id } = action.payload;

      const selectedProduct = state.products.find(product => product.id === id);
      if (selectedProduct) {
        if(state.totalQuantity !==0)
            {state.totalQuantity -= 1;
                state.totalPrice -= selectedProduct.price;
        selectedProduct.aux -= selectedProduct.price;
            }
        else(alert('empty cart'))
        

        
      } 
    },

    clearCart: (state) => {
      // Se deben restablecer las propiedades del estado
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;

      console.log('Carrito limpiado');
    }
  }
});

export const { addProduct, removeProduct, clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
