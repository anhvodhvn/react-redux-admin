import React from 'react';
import Loading from '../components/base/Loading';
import PageBase from '../components/PageBase';
import Products from '../components/product';

const ProductPage = () => {
  return (
    <PageBase title="Product List" navigation="Application / Product Page">
      <Loading />
      <Products />
    </PageBase>
  );
};

export default ProductPage;