import React from 'react';

const OrderInformation = ({ total, placeOrder, clearTotal }) => {
  return (
    <div className="row">
        <div className="row" style={{ height: '20px' }}>
            <div className="col-12">
                {}
            </div>
        </div>
        <div className="col-6 order-total">
            <h3>Subtotal: ${total.toFixed(2)}</h3>
        </div>
        <div className="col-3">
        <button onClick={placeOrder} class="add-button-style">Order</button>
        </div>
        <div className="col-3">
        <button onClick={clearTotal} class="clear-button-style">Clear All</button>
        </div>
    </div>
  );
};

export default OrderInformation;