import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';

import styles from '../styles';

let OrderEditForm = (props) => {
    let { handleApprove, handleReject, handleCancel, OrderId } = props;
    return (
        <form>
            <Field name="OrderId" component={TextField} hintText="Order Id" floatingLabelText="Order Id" fullWidth={true} />

            <Field name="MerchantName" component={TextField} hintText="Merchant Name" floatingLabelText="Merchant Name" fullWidth={true} />

            <Field name="MerchantClub" component={TextField} hintText="Merchant Club" floatingLabelText="Merchant Club" fullWidth={true} />
            
            <Field name="Total" component={TextField} hintText="Total" floatingLabelText="Total" fullWidth={true} />

            <Field name="Currency" component={TextField} hintText="Currency" floatingLabelText="Currency" fullWidth={true} />

            <Field name="Description" component={TextField} hintText="Description" floatingLabelText="Description" fullWidth={true} />

            <Field name="CreatedAt" component={TextField} hintText="Created At" floatingLabelText="Created At" fullWidth={true} />

            <Field name="Status" component={TextField} hintText="Order Status" floatingLabelText="Order Status" fullWidth={true} />

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
};

OrderEditForm = reduxForm({
    form: 'OrderEditForm',
    enableReinitialize: true
})(OrderEditForm);

const mapStateToProps = (props) => ({
    initialValues: { 
        ...props.orderReducer.orderItem,
        MerchantName: props.orderReducer.orderItem.Merchant ? props.orderReducer.orderItem.Merchant.FullName : '',
        MerchantClub: props.orderReducer.orderItem.Merchant ? props.orderReducer.orderItem.Merchant.Club : ''
    },
});

export default connect(mapStateToProps)(OrderEditForm);