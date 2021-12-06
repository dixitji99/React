import './order.style.scss'
import axios from 'axios';
import { useEffect } from 'react';
import { OrderModel } from '../../Model/OrderModel';
import OrderDisplay from './OrderDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../reducer';
import { setOrder } from '../../actions/orderAction';

const Order = () => {
    const orders=useSelector((state:RootState)=>state.order.order.flat());
    
    const dispatch=useDispatch<AppDispatch>();
    
    const fetchOrder=async ()=>{
        const respo=await axios
        .get("https://61a32c52014e1900176deaf4.mockapi.io/orders")
        console.log(orders);
        dispatch(setOrder(respo.data));
    }
    
    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        < div >
            {
                orders.map((order) => (
                    <div className="container my-4 b-1" key={order.id}>
                        <OrderDisplay order={order} />
                    </div >
                ))
            }
        </div >

    )
}

export default Order
