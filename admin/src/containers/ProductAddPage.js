import React, { Component } from 'react';
import PageBase from '../components/PageBase';
import ProductAdd from '../components/product/add';

class ProductAddPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageBase title="Add Product" navigation="Application / Add Product">
        <ProductAdd />
      </PageBase>
    );
  }
}

export default ProductAddPage;