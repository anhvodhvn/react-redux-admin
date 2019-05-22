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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { id, getOrderItem, loading } = this.props;
        loading(() => getOrderItem(id));
    }

    handleCancel() {
        browserHistory.push('/order');
    }

    handleSubmit(values) {
        console.log('- values:', values);
    }

    render() {
        let { order: { Id } } = this.props;
        return (
            <OrderEditForm  onSubmit={this.handleSubmit}
                            handleCancel={this.handleCancel}
                            Id={Id} />
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