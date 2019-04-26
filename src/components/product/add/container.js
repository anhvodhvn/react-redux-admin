import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductAddForm from './form';

import { addProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    handleSubmit(o, e) {
        e.preventDefault();
        let product = {
            name: 'Acer Xpatch 2010'
        };
        let { addProduct } = this.props;
        return addProduct(product);
    }

    handleChangeLocation(event, index, value) {
        //this.setState({ location: value });
    }

    handleChangeCategory(event, index, value) {
        //this.setState({ category: value });
    }

    render() {
        return (
            <ProductAddForm handleSubmit={this.handleSubmit}
                            handleChangeLocation={this.handleChangeLocation}
                            handleChangeCategory={this.handleChangeCategory}
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