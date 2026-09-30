import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

export function App() {
  return (
    <HashRouter>
      <div
        className="min-h-screen font-sans flex flex-col"
        style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}
      >
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              backgroundColor: '#18181b',
              color: '#f4f4f5',
              border: '1px solid rgba(59,130,246,0.4)',
            },
          }}
        />
        <div
          className="w-full text-xs text-center py-2 px-4 font-medium"
          style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
        >
          For free shipping on orders over $100 use code FREESHIPPINGYAY
        </div>
        <Navbar className="border-b border-[rgba(63,63,70,0.7)]" />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;