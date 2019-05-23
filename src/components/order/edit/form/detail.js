import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import ProductList from './list';

import styles from '../styles';

let OrderEditForm = (props) => {
    let { handleApprove, handleReject, handleCancel, OrderId, Products } = props;
    return (
        <form>
            <Field name="OrderId" component={TextField} hintText="Order Id" floatingLabelText="Order Id" fullWidth={true} readOnly={true}/>

            <Field name="MerchantInformation" component={TextField} hintText="Merchant Information" floatingLabelText="Merchant Information" fullWidth={true} readOnly={true}/>

            <ProductList products={Products}/>

            <Field name="TotalPrice" component={TextField} hintText="Total Price" floatingLabelText="Total Price" fullWidth={true} readOnly={true}/>
            
            <Field name="CreatedAt" component={TextField} hintText="Created At" floatingLabelText="Created At" fullWidth={true} readOnly={true}/>

            <Field name="Status" component={TextField} hintText="Order Status" floatingLabelText="Order Status" fullWidth={true} readOnly={true}/>

            <Field name="Description" component={TextField} hintText="Description" floatingLabelText="Description" fullWidth={true} readOnly={true}/>

            <div style={styles.buttons}>
                <RaisedButton label="Approve" style={styles.approveButton} type="button" primary={true} onClick={() => handleApprove(OrderId)} />
                <RaisedButton label="Reject" style={styles.cancelButton} type="button" secondary={true} onClick={() => handleReject(OrderId)} />
                <RaisedButton label="Cancel" onClick={handleCancel} />
            </div>
        </form>
    );
};
  
OrderEditForm.propTypes = {
    handleApprove: PropTypes.func,
    handleReject: PropTypes.func,
    handleCancel: PropTypes.func,
    OrderId: PropTypes.number,
    Products: PropTypes.array,
};

OrderEditForm = reduxForm({
    form: 'OrderEditForm',
    enableReinitialize: true
})(OrderEditForm);

const mapStateToProps = (props) => ({
    initialValues: { 
        ...props.orderReducer.orderItem,
        MerchantInformation: props.orderReducer.orderItem.Merchant ? 
            (props.orderReducer.orderItem.Merchant.FullName + ', ' + props.orderReducer.orderItem.Merchant.Club) : '',
        TotalPrice: (props.orderReducer.orderItem.Total && props.orderReducer.orderItem.Currency) ? 
            (props.orderReducer.orderItem.Total + ` (${(props.orderReducer.orderItem.Currency)})`) : ''
    },
});

export default connect(mapStateToProps)(OrderEditForm);