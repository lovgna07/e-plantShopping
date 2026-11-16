import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Crea el store de Redux usando configureStore de Redux Toolkit
const store = configureStore({
    // Define el objeto reducer raíz
    reducer: {
        // 'cart' es el nombre del slice en el store y es gestionado por cartReducer
        cart: cartReducer,
    },
});

export default store; // Exporta el store para usarlo en toda la aplicación (en <Provider store={store}>)