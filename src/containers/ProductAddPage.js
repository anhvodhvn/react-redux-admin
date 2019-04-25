import React from 'react';
import PageBase from '../components/PageBase';
import ProductAdd from '../components/product/add';

const ProductAddPage = () => {
  return (
    <PageBase title="Form Page" navigation="Application / Add Product">
      <ProductAdd />
    </PageBase>
  );
};

export default ProductAddPage;
