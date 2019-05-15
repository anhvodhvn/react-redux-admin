import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

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

    handleSubmit(values) {
        let { id, editProduct, loading } = this.props;
        let { ProductName, CategoryId, LocationId, Price, ExpirationDate1, Disabled } = values;
        let product = {
            id: id,
            name: ProductName,
            categoryId: CategoryId,
            locationId: LocationId,
            price: Number(Price),
            expirationDate: moment(ExpirationDate1).format('YYYY-MM-DD HH:mm:ss'),
            disabled: Disabled
        };
        loading(() => editProduct(product));
    }

    render() {
        const { product: { Id, ImageUrl } } = this.props;
        return (
            <ProductEditFrom  onSubmit={this.handleSubmit}
                              Id={Id}
                              ImageUrl={ImageUrl}
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