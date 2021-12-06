import React from 'react'

interface PropType{
    grandTotal: number;
}
const OrderTotal = ({grandTotal}:PropType) => {
    return (

        <div className="row">
            <div className="col fs-4" >
                <label className="fw-bold"><strong>Grand Total:</strong></label>${grandTotal}
            </div>
        </div>
    )
}

export default OrderTotal
