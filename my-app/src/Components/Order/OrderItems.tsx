import './order.style.scss'
import { Item } from '../../Model/OrderModel'

interface PropType {
    items: Item[];
}
const OrderItems = ({ items }: PropType) => {
    const randomKey=Math.random().toString();
    return (
        <>
            {
                items?.map(item => (
                    <div className="row" id={item.id.toString()+randomKey}>
                        <div className="col flex-container-row">
                            <img src={item.cover_image} className="flex-item img" alt={item.title}/>
                            <div className="flex-container-column">
                                <span className="flex-item fs-3 fw-bold">{item.title}</span>
                                <span className="flex-item">Quantity: {item.qty}</span>
                                <span className="flex-item">Pages: {item.pages}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default OrderItems
