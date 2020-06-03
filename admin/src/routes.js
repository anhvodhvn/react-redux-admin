import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import ProductPage from './containers/ProductPage';
import ProductAddPage from './containers/ProductAddPage';
import ProductEditPage from './containers/ProductEditPage';
import OrderPage from './containers/OrderPage';
import OrderEditPage from './containers/OrderEditPage';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="/login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="product" component={ProductPage}/>
      <Route path="product/add" component={ProductAddPage}/>
      <Route path="product/edit/:id" component={ProductEditPage}/>
      <Route path="order" component={OrderPage}/>
      <Route path="order/edit/:id" component={OrderEditPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
