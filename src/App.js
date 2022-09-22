import './App.css';
import AllProduct from './Components/AllProduct/AllProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleAddToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} handleClearCart={handleClearCart}></Navigation>

      <AllProduct handleAddToCart={handleAddToCart}></AllProduct>
    </div>
  );
}

export default App;
