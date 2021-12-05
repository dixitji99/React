import './order.style.scss'

const order = [{ id: "" },{id:""}];
const Order = () => {
    return (
        < div >

        <div className="container my-4 b-1">
            <div className="row bg-primary px-0 fc-w">
                <div className="col-md-8">
                    <label htmlFor="orderPlaced">Order Placed: </label>
                    {"book.orderedAt"}
                </div>
                <div className="col-md-3 left">
                    <label htmlFor="status">Status: </label>
                    {"book.status"}
                </div>
            </div>
            <div className="row">
                <div className="col flex-container-row">
                    {/* <img src={item.cover_image} className="flex-item" alt="Image1"> */}
                    <div className="flex-container-column">
                    <span className="flex-item fs-3 fw-bold">{"item.title"}</span>
                    <span className="flex-item">Quantity: {"item.qty"}</span>
                    <span className="flex-item">Pages: {"s"}</span>
                    <span className="flex-item"></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <hr />
                </div>
                <div className="col fs-4" >
                    <label className="fw-bold">Grand Total:</label>{"book.grandTotal "}
                </div>
            </div>
        </div >
   </div >     
       
    )
}

export default Order
