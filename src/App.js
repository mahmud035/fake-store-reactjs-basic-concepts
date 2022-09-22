import './App.css';
import AllProduct from './Components/AllProduct/AllProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <AllProduct></AllProduct>
    </div>
  );
}

export default App;
