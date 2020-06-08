import React from 'react';
import PageBase from '../components/PageBase';
import Orders from '../components/order';

const OrderPage = () => {
  return (
    <PageBase title="Order List" navigation="Application / Order Page">
      <Orders />
    </PageBase>
  );
};

export default OrderPage;