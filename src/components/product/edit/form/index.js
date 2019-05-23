import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import ErrorMessage from '../../../base/errorMessage';
import ImageUpload from '../../../base/imageUpload';
import renderRadioGroup from '../../controls/renderRadionGroup';
import {
    Checkbox,
    SelectField,
    TextField,
    Toggle,
    DatePicker
  } from 'redux-form-material-ui';

import validate from './validate';

import styles from '../styles';

let ProductEditForm = (props) => {
    let { 
        error, submitting, handleSubmit, handleCancel, locationList, categoryList, inventoryStatusList,
        Id, ImageUrl
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="ProductId" component={TextField} hintText="ID" floatingLabelText="ID" fullWidth={true} readOnly={true} />

            <Field name="ProductName" component={TextField} hintText="Name" floatingLabelText="Name" fullWidth={true} />

            <Field name="LocationId" component={SelectField} hintText="City" floatingLabelText="City" fullWidth={true}>
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="CategoryId" component={SelectField} hintText="Category" floatingLabelText="Category" fullWidth={true}>
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="ExpirationDate1" component={DatePicker} format={null} hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} />

            <Field name="Price" component={TextField} hintText="Price" floatingLabelText="Price" fullWidth={true} />

            <div style={styles.toggleDiv}>
                <Field name="Active" component={Toggle} label="Active" labelStyle={styles.toggleLabel} />
            </div>

            <Divider/>

            <Field name="InventoryStatus" component={renderRadioGroup} style={styles.radiogroupDiv}>
                { inventoryStatusList.map((status) => <RadioButton key={status.Code} value={status.Code} label={status.Name} labelStyle={styles.radioLabel}/>) }
            </Field>

            <Divider/>

            <div style={styles.checkboxDiv}>
                <Field name="Recommended" component={Checkbox} label="Product is recommended!" labelStyle={styles.checkboxLabel} />
            </div>

            <Divider/>

            <ImageUpload productId={Id || ''} imageUrl={ImageUrl || ''} />

            <Divider/>

            { error ? <ErrorMessage errorMessage={error} /> : null }

            <div style={styles.buttons}>
                <RaisedButton label="Cancel" onClick={handleCancel} disabled={submitting} />
                <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true} disabled={submitting} />
            </div>
        </form>
    );
};
  
ProductEditForm.propTypes = {
    error: PropTypes.string,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    Id: PropTypes.string,
    ImageUrl: PropTypes.string,
    locationList: PropTypes.array,
    categoryList: PropTypes.array,
    inventoryStatusList: PropTypes.array,
};

ProductEditForm = reduxForm({
    form: 'ProductEditForm',
    validate,
    enableReinitialize: true
})(ProductEditForm);

const mapStateToProps = (props) => ({
    initialValues: { 
        ...props.productReducer.productItem,
        LocationId: props.productReducer.productItem.Location ? (props.productReducer.productItem.Location.Code || props.productReducer.productItem.Location.Id) : '',
        CategoryId: props.productReducer.productItem.Category ? (props.productReducer.productItem.Category.Code || props.productReducer.productItem.Category.Id) : '',
        ExpirationDate1: props.productReducer.productItem.ExpirationDate ? new Date(props.productReducer.productItem.ExpirationDate) : null,
        InventoryStatus: props.productReducer.productItem.InventoryStatus ? props.productReducer.productItem.InventoryStatus : 1,
        Active: props.productReducer.productItem.Active ? props.productReducer.productItem.Active : 1,
        Recommended: props.productReducer.productItem.Recommended ? props.productReducer.productItem.Recommended : 1,
    },
});

export default connect(mapStateToProps)(ProductEditForm);