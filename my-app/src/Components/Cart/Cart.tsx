import './cart.style.scss'

const Cart = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-4">
                        <div className="fc-c g-1">
                            <label htmlFor="shippingAddress" className="fitem fw-normal fs-4">Shipping Address</label>
                            <p className="card p-4 fitem">xyz street, mo, 200012
                                <strong>{"123 123 123"}</strong>
                            </p>
                            <div className="fc-r g-1">
                                <button className="btn btn-primary fitem2">Edit</button>
                                <button className="btn btn-primary fitem2">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-cs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                        <div className="fc-c g-1">
                            <label htmlFor="shippingAddress" className="fitem fw-normal fs-4">Shipping Address</label>
                            <div className="fitem">
                                <div className="card fc-r p-2 mb-3 g-1">
                                    <img src="assets/harry1.jpg" alt="image" className="fi-c image" />
                                    <div className="fc-c fi-c">
                                        <label className="fw-bold">Book Title</label>
                                        <label>Book Author</label>
                                        <label>{57}</label>
                                    </div>
                                    <hr />
                                    <div className="fc-c g-2">
                                        <label htmlFor="quantity" className="fi-c">Quantity</label>
                                        <div className="fc-r mc-1 g-2 fi-c">
                                            <input type="button" value="-" />
                                            {/* onClick={subQuant()} */}
                                            <label htmlFor="quantvalue" >{"quantityValue"}</label>
                                            <input type="button" value="+"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="fc-r g-1">
                                    <button className="btn btn-primary fitem2">Checkout</button>
                                    <button className="btn btn-primary fitem2">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div >
    )
}

export default Cart
