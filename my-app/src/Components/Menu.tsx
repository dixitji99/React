import './menu.style.scss'
import * as constant from '../Constant/Constant'
import { Link, useLocation } from "react-router-dom";
import Home from './Home/Home';
import Order from './Order/Order';
import Cart from './Cart/Cart';

const Menu = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation[1]);
    
    return (
        <>
            <div className="menu">
                <div className="nav">
                    <label htmlFor="appNameTitle" className="app-name">{constant.APP_NAME}</label>
                    <ul className="nav--list">
                        <li key="home"><Link to="/" className={splitLocation[1] === "" ? "nav--active" : "nav--inactive"}>Home</Link></li>
                        <li>|</li>
                        <li key="order"><Link to="/Order" className={splitLocation[1] === "Order" ? "nav--active" : "nav--inactive"}>Order</Link></li>
                        <li>|</li>
                        <li key="cart"><Link to="/Cart" className={splitLocation[1] === "Cart" ? "nav--active" : "nav--inactive"}>Cart</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;
