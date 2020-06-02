import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderList from './list';

import { loading } from '../../actions/loading';
import { getOrderList } from '../../actions/order';

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { getOrderList, loading } = this.props;
        loading(() => getOrderList());
    }

    render() {
        let { orders } = this.props;
        return (
            <div>
                <OrderList orders={orders} />
            </div>
        );
    }
}

Orders.propTypes = {
    loading: PropTypes.func,
    getOrderList: PropTypes.func,
    orders: PropTypes.array
};

const mapStateToProps = state => {
    const { orderList } = state.orderReducer;
    return {
        orders: orderList
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loading,
        getOrderList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);