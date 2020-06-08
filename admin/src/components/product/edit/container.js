import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import moment from 'moment';

import { SubmissionError } from 'redux-form';
import ProductEditFrom from './form';

import { loading } from '../../../actions/loading';
import { getProductItem, editProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';
import utils from '../../../utils/utils';

class ProductEdit extends Component {
    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { id, getProductItem, loading } = this.props;
        loading(() => getProductItem(id));
    }

    handleCancel() {
        browserHistory.push('/product');
    }

    handleSubmit(values) {
        let { id, editProduct } = this.props;
        let { ProductName, CategoryId, LocationId, Price, ExpirationDate1, InventoryStatus, Recommended, Active } = values;
        let product = {
            id: id,
            name: ProductName,
            categoryId: CategoryId,
            locationId: LocationId,
            price: Number(Price),
            expirationDate: moment(ExpirationDate1).format('YYYY-MM-DD HH:mm:ss'),
            inventoryStatus: InventoryStatus,
            recommended: Recommended,
            active: Active
        };
        return editProduct(product)
        .catch((err) => {
            let { response } = err;
            throw new SubmissionError({
                code: response.status,
                _error: utils.handleErrorMessage(response)
            });
        });
    }

    render() {
        const { product: { Id, ImageUrl } } = this.props;
        return (
            <ProductEditFrom  onSubmit={this.handleSubmit}
                              handleCancel={this.handleCancel}
                              Id={Id}
                              ImageUrl={ImageUrl}
                              locationList={CONSTANTS.LOCATION}
                              categoryList={CONSTANTS.CATEGORY}
                              inventoryStatusList={CONSTANTS.INVENTORY_STATUS} />
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