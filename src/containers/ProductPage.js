import React from 'react';
import PageBase from '../components/PageBase';
import Products from '../components/product';

const ProductPage = () => {
  return (
    <PageBase title="Table Page"
              navigation="Application / Product Page">

      <Products />

    </PageBase>
  );
};

export default ProductPage;