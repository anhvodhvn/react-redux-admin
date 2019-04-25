import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageBase from '../components/PageBase';
import ProductEdit from '../components/product/edit';

import { getProductItem } from '../actions/product';

class ProductEditPage extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    let { routeParams: {id}, getProductItem } = this.props;
    return getProductItem(id);
  }

  render() {
    let { product } = this.props;
    return (
      <PageBase title="Form Page" navigation="Application / Edit Product">
        <ProductEdit product={product}/>
      </PageBase>
    );
  }
}

ProductEditPage.propTypes = {
  routeParams: PropTypes.object,
  product: PropTypes.object,
  getProductItem: PropTypes.func
};

ProductEditPage.contextTypes = {
  routeParams: React.PropTypes.object
};

const mapStateToProps = state => {
  const { productItem } = state.productReducer;
  return {
      product: productItem
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
      getProductItem
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage);