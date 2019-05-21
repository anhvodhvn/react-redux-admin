import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { SubmissionError } from 'redux-form';
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
        let { Name, Location, Category, Price } = values;
        let product = {
            name: Name,
            locationId: Location,
            categoryId: Category,
            price: Number(Price)
        };
        let { addProduct } = this.props;
        return addProduct(product)
        .then(res => {
            if (res.status == 200) browserHistory.push('/product');
        })
        .catch(err => {
            let { response } = err;
            throw new SubmissionError({
                code: response.status,
                _error: utils.handleErrorMessage(response)
            });
        });
    }

    render() {
        return (
            <ProductAddForm onSubmit={this.handleSubmit}
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