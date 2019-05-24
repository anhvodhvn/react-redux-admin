import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import ProductList from './list';

import ErrorMessage from '../../../base/errorMessage';

import styles from '../styles';

import CONSTANTS from '../../../../utils/constants';

let OrderEditForm = (props) => {
    let { error, submitting, onSubmit, handleSubmit, handleCancel, OrderId, OrderStatus, Products } = props;
    return (
        <form>
            <Field name="OrderId" component={TextField} hintText="Order Id" floatingLabelText="Order Id" fullWidth={true} disabled={true}/>

            <Field name="MerchantInformation" component={TextField} hintText="Merchant Information" floatingLabelText="Merchant Information" fullWidth={true} readOnly={true}/>

            <ProductList products={Products}/>

            <Field name="TotalPrice" component={TextField} hintText="Total Price" floatingLabelText="Total Price" fullWidth={true} readOnly={true}/>
            
            <Field name="CreatedAt" component={TextField} hintText="Created At" floatingLabelText="Created At" fullWidth={true} readOnly={true}/>

            <Field name="Status" component={TextField} hintText="Order Status" floatingLabelText="Order Status" fullWidth={true} readOnly={true}/>

            <Field name="Description" component={TextField} hintText="Description" floatingLabelText="Description" fullWidth={true} readOnly={true} />

            {
                ([CONSTANTS.ORDER_STATUS.PENDING, CONSTANTS.ORDER_STATUS.REJECTED].indexOf(OrderStatus) >= 0)
                ? <Field name="Reason" component={TextField} hintText="Rejected order's reason" floatingLabelText="Rejected order's reason" fullWidth={true} />
                : null
            }

            { error ? <ErrorMessage errorMessage={error} /> : null }

            <div style={styles.buttons}>
                {
                    (OrderStatus == CONSTANTS.ORDER_STATUS.PENDING)
                        ? <RaisedButton label="Approve" style={styles.approveButton} type="button" primary={true} disabled={submitting} 
                                        onClick={handleSubmit(() => onSubmit({ orderId: OrderId, orderStatus: CONSTANTS.ORDER_STATUS.APPROVED }))} /> 
                        : null
                }
                {
                    (OrderStatus == CONSTANTS.ORDER_STATUS.PENDING)
                        ? <RaisedButton label="Reject" style={styles.cancelButton} type="button" secondary={true} disabled={submitting} 
                                        onClick={handleSubmit((values) => onSubmit({ orderId: OrderId, orderStatus: CONSTANTS.ORDER_STATUS.REJECTED, reason: values.Reason }))} /> 
                        : null
                }
                <RaisedButton label="Cancel" onClick={handleCancel} disabled={submitting} />
            </div>
        </form>
    );
};
  
OrderEditForm.propTypes = {
    error: PropTypes.string,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    OrderId: PropTypes.number,
    OrderStatus: PropTypes.string,
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
            (props.orderReducer.orderItem.Merchant.FullName + ', ' + (props.orderReducer.orderItem.Merchant.Club || props.orderReducer.orderItem.Merchant.Position)) : '',
        TotalPrice: (props.orderReducer.orderItem.Total && props.orderReducer.orderItem.Currency) ? 
            (props.orderReducer.orderItem.Total + ` (${(props.orderReducer.orderItem.Currency)})`) : '',
        Reason: props.orderReducer.orderItem.Rejection ? props.orderReducer.orderItem.Rejection.Reason : ''
    },
});

export default connect(mapStateToProps)(OrderEditForm);