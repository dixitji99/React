import './order.style.scss'
import axios from 'axios';
import { useEffect } from 'react';
import { OrderModel } from '../../Model/OrderModel';
import OrderDisplay from './OrderDisplay';

const orders: [OrderModel[]] = [[]];

const Order = () => {

    // const getOrdersData = async () => {
    //     const response = await axios.get("https://61a32c52014e1900176deaf4.mockapi.io/orders");
    //     return response.data;
    // }
    useEffect(() => {
        axios.get("https://61a32c52014e1900176deaf4.mockapi.io/orders")
            .then(res => orders.push(res.data))
        // getOrdersData().then(res => orders.push(res));
        // orders[0].map(data=>console.log("Id:",data.id))
        // console.log(orders[orders.length-1]);
    }, [orders]);

    return (
        < div >
            {
                orders[orders.length-1].map((order) => (
                    <div className="container my-4 b-1">
                        <OrderDisplay order={order} />
                    </div >
                ))
            }
        </div >

    )
}

export default Order
