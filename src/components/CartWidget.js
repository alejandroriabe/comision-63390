import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
    const itemCount = 5; 

    return (
        <div className="ml-auto">
            <button className="btn btn-outline-primary">
                <FaShoppingCart />
                <span className="badge badge-light">{itemCount}</span>
            </button>
        </div>
    );
};

export default CartWidget;