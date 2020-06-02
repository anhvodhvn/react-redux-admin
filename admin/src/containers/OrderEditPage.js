import React, { Component, PropTypes } from 'react';
import PageBase from '../components/PageBase';
import OrderEdit from '../components/order/edit';

class OrderEditPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { routeParams: {id} } = this.props;
    return (
      <PageBase title="Approve/Reject Order" navigation="Application / Approve or Reject Order">
        <OrderEdit id={id}/>
      </PageBase>
    );
  }
}

OrderEditPage.propTypes = {
  routeParams: PropTypes.object
};

OrderEditPage.contextTypes = {
  routeParams: PropTypes.object
};

export default OrderEditPage;