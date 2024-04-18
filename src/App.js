import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory'; 
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mouse' element={<ShopCategory category="Mouse"/>} />
          <Route path='/keyboard' element={<ShopCategory category="Keyboard"/>} />
          <Route path='/headset' element={<ShopCategory category="Headset"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
