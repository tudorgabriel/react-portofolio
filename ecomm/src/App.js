import React from 'react';
import '../src/routes/MainLayout';
import MainLayout from '../src/routes/MainLayout';
import { ProductsProvider } from '../src/context/products.context';
import { CartProvider } from '../src/context/cart.context'

function App() {

  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
          <MainLayout />
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
