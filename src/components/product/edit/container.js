import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductEditFrom from './form';

import { loading } from '../../../actions/loading';
import { getProductItem, editProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';

class ProductEdit extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { id, getProductItem, loading } = this.props;
        loading(() => getProductItem(id));
    }

    handleSubmit(e) {
        e.preventDefault();
        let product = {
            id: 'b95e9f80-67f7-11e9-863b-d30e0d39d98b',
            name: 'Macbook Air Ultimate 2025',
            image: 'https://s3.amazonaws.com/aws-product-images/product/working.jpg'
        };
        let { editProduct } = this.props;
        return editProduct(product);
    }

    render() {
        const { product } = this.props;
        return (
            <ProductEditFrom  onSubmit={this.handleSubmit}
                              product={product}
                              locationList={CONSTANTS.LOCATION}
                              categoryList={CONSTANTS.CATEGORY} />
        );
    }
}

ProductEdit.propTypes = {
    id: PropTypes.string,
    product: PropTypes.object,
    loading: PropTypes.func,
    getProductItem: PropTypes.func,
    editProduct: PropTypes.func
};

const mapStateToProps = state => {
    const { productItem } = state.productReducer;
    return {
        product: productItem
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loading,
        getProductItem,
        editProduct
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);