import React from 'react';
import PageBase from '../components/PageBase';
import Products from '../components/product';

const TablePage = () => {
  return (
    <PageBase title="Table Page"
              navigation="Application / Table Page">

      <Products />

    </PageBase>
  );
};

export default TablePage;