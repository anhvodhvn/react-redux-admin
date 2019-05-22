import React, { PropTypes } from 'react';

const OrderList = (props) => {
    let {orders} = props;
    return (
        <div>{orders}</div>
    );
};

OrderList.propTypes = {
    orders: PropTypes.array
};

export default OrderList;