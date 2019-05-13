import React, { Component, PropTypes } from 'react';
import PageBase from '../components/PageBase';
import ProductEdit from '../components/product/edit';

class ProductEditPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { routeParams: {id} } = this.props;
    return (
      <PageBase title="Edit Product" navigation="Application / Edit Product">
        <ProductEdit id={id}/>
      </PageBase>
    );
  }
}

ProductEditPage.propTypes = {
  routeParams: PropTypes.object
};

ProductEditPage.contextTypes = {
  routeParams: React.PropTypes.object
};

export default ProductEditPage;