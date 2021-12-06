import './order.style.scss'
import { OrderModel } from '../../Model/OrderModel'
import OrderItems from './OrderItems'
import OrderMenu from './OrderMenu'
import OrderTotal from './OrderTotal'

interface PropType {
    order: OrderModel;
}

const OrderDisplay = ({ order }: PropType) => {
    return (

        <>
            <OrderMenu orderStatus={order.status} orderedAt={order.orderedAt} />
            <OrderItems items={order.items} />
            <OrderTotal grandTotal={order.grandTotal} />

        </>
    )
}

export default OrderDisplay
