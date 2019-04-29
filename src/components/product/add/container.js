import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import ProductAddForm from './form';

import { addProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';
import utils from '../../../utils/utils';

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitError: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        let product = {
            name: values.name,
            locationId: values.location,
            categoryId: values.category,
            price: values.price
        };
        let { addProduct } = this.props;
        return addProduct(product)
        .then(res => {
            if (res.status == 200) browserHistory.push('/product');
        })
        .catch(err => {
            let error = utils.handleErrorMessage(err.response);
            this.setState({ submitError: { error } });
        });
    }

    render() {
        return (
            <ProductAddForm onSubmit={this.handleSubmit}
                            submitError={this.state.submitError}
                            locationList={CONSTANTS.LOCATION}
                            categoryList={CONSTANTS.CATEGORY} />
        );
    }
}

ProductAdd.propTypes = {
    product: PropTypes.object,
    addProduct: PropTypes.func
};

const mapStateToProps = state => {
    const { productItem } = state.productReducer;
    return {
        product: productItem
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addProduct
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);