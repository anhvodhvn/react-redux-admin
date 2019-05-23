import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import OrderEditForm from './form';

import { loading } from '../../../actions/loading';
import { getOrderItem } from '../../../actions/order';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    componentDidMount() {
        let { id, getOrderItem, loading } = this.props;
        loading(() => getOrderItem(id));
    }

    handleCancel() {
        browserHistory.push('/order');
    }

    handleApprove(values) {
        console.log('- approve values:', values);
    }

    handleReject(values) {
        console.log('- reject values:', values);
    }

    render() {
        let { order: { OrderId, ProductList } } = this.props;
        return (
            <OrderEditForm  handleCancel={this.handleCancel}
                            handleApprove={this.handleApprove}
                            handleReject={this.handleReject}
                            OrderId={OrderId}
                            Products={ProductList} />
        );
    }
}

OrderEdit.propTypes = {
    id: PropTypes.string,
    order: PropTypes.object,
    loading: PropTypes.func,
    getOrderItem: PropTypes.func
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
        getOrderItem
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit);