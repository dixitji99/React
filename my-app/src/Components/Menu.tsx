import './menu.style.scss'
import * as constant from '../Constant/Constant'
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation[1]);

    return (
        <>
            <div className="nav">
                <div className="nav__logo">
                    <label htmlFor="appNameTitle" className="nav__logo--style">{constant.APP_NAME}</label>
                </div>
                <div>
                    <ul className="nav__list">
                        <li key="home" className={splitLocation[1] === "" ? "nav__list--active" : "nav__list--inactive"}><Link to="/">Home</Link></li>
                        <li key="order" className={splitLocation[1] === "Order" ? "nav__list--active" : "nav__list--inactive"}><Link to="/Order" >Order</Link></li>
                        <li key="cart" className={splitLocation[1] === "Cart" ? "nav__list--active" : "nav__list--inactive"}><Link to="/Cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;
