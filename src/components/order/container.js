import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loading } from '../../actions/loading';

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { orders } = this.props;
        return (
            <div>
                {orders}
            </div>
        );
    }
}

Orders.propTypes = {
    loading: PropTypes.func,
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
        loading
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);