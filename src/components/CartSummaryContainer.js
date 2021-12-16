import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartSummaryContainer (props) {
    return (
        <div>
            <FaShoppingCart />
            {/* <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">&nbsp;</span> */}
            {props.itemCount} items
        </div>
    );
};

// export default CartSummaryContainer;