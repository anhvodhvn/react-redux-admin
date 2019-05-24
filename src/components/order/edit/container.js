import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { SubmissionError } from 'redux-form';
import OrderEditForm from './form';

import { loading } from '../../../actions/loading';
import { getOrderItem, approveOrder, rejectOrder } from '../../../actions/order';
import utils from '../../../utils/utils';
import CONSTANTS from '../../../utils/constants';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { id, getOrderItem, loading } = this.props;
        loading(() => getOrderItem(id));
    }

    handleCancel() {
        browserHistory.push('/order');
    }

    handleApprove(orderId) {
        let { approveOrder } = this.props;
        return approveOrder(orderId)
        .then((res) => {
            if (res.status == 200) browserHistory.push('/order');
        })
        .catch(err => {
            let { response } = err;
            throw new SubmissionError({
                code: response.status,
                _error: utils.handleErrorMessage(response)
            });
        });
    }

    handleReject(orderId) {
        let { rejectOrder } = this.props;
        return rejectOrder(orderId)
        .then((res) => {
            if (res.status == 200) browserHistory.push('/order');
        })
        .catch(err => {
            let { response } = err;
            throw new SubmissionError({
                code: response.status,
                _error: utils.handleErrorMessage(response)
            });
        });
    }

    handleSubmit(values) {
        let { orderId, orderStatus } = values;
        if(orderStatus == CONSTANTS.ORDER_STATUS.APPROVED) return this.handleApprove(orderId);
        else if(orderStatus == CONSTANTS.ORDER_STATUS.REJECTED) return this.handleReject(orderId);
    }

    render() {
        let { order: { OrderId, Status, ProductList } } = this.props;
        return (
            <OrderEditForm  onSubmit={this.handleSubmit}
                            handleCancel={this.handleCancel}
                            OrderId={OrderId}
                            OrderStatus={Status}
                            Products={ProductList} />
        );
    }
}

OrderEdit.propTypes = {
    id: PropTypes.string,
    order: PropTypes.object,
    loading: PropTypes.func,
    getOrderItem: PropTypes.func,
    approveOrder: PropTypes.func,
    rejectOrder: PropTypes.func,
};

const mapStateToProps = state => {
    const { orderItem } = state.orderReducer;
    return {
        order: orderItem
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loading,
        getOrderItem,
        approveOrder,
        rejectOrder
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit);