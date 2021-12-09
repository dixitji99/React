import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import AboutBook from './Components/Home/AboutBook';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './reducer';
import { useEffect } from 'react';
import axios from 'axios';
import { setOrder } from './actions/orderAction';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  const fetchOrder = async () => {
    const respo = await axios
      .get("https://61a32c52014e1900176deaf4.mockapi.io/orders")
    dispatch(setOrder(respo.data));
  }
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      <Router>
        <Menu />
        <div className="content-display">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/:id" element={<AboutBook />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
