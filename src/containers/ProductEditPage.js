import React from 'react';
import PageBase from '../components/PageBase';
import ProductEdit from '../components/product/edit';

const ProductEditPage = () => {
  return (
    <PageBase title="Form Page" navigation="Application / Edit Product">
      <ProductEdit />
    </PageBase>
  );
};

export default ProductEditPage;