import './order.style.scss'
import OrderDisplay from './OrderDisplay';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

const Order = () => {
    const orders = useSelector((state: RootState) => state.order.order.flat());
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
