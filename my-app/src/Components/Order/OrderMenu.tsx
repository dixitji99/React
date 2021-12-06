import './order.style.scss'


interface PropType{
    orderStatus:string;
    orderedAt:Date;
}

const OrderMenu = ({orderStatus,orderedAt}:PropType) => {
    return (
            <div className="row bg-primary px-0 fc-w" >
                <div className="col-md-8">
                    <label htmlFor="orderPlaced" className="menu-label">Ordered At:</label>
                    <span>{orderedAt}</span>
                </div>
                <div className="col-md-3 left">
                    <label htmlFor="status"  className="menu-label">Status: </label>
                    <span>{orderStatus}</span>
                </div>
            </div>
    )
}

export default OrderMenu
