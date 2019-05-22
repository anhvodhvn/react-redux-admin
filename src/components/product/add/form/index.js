import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Toggle} from 'redux-form-material-ui';

import ErrorMessage from '../../../base/errorMessage';
import renderTextField from '../../controls/renderTextField';
import renderSelectField from '../../controls/renderSelectField';

import validate from './validate';

import styles from '../styles';

const ProductAddForm = (props) => {
    const { error, submitting, handleSubmit, locationList, categoryList } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="Name" component={renderTextField} label="Name"/>

            <Field name="Location" component={renderSelectField} label="Location">
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="Category" component={renderSelectField} label="Category">
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="Price" component={renderTextField} label="Price"/>

            <div style={styles.toggleDiv}>
                <Field name="Active" component={Toggle} label="Active" labelStyle={styles.toggleLabel} />
            </div>

            <Divider/>

            { error ? <ErrorMessage errorMessage={error} /> : null }

            <div style={styles.buttons}>
                <Link to="/product">
                    <RaisedButton label="Cancel" disabled={submitting}/>
                </Link>

                <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true} disabled={submitting} />
            </div>
        </form>
    );
};
  
ProductAddForm.propTypes = {
    error: PropTypes.string,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    locationList: PropTypes.array,
    categoryList: PropTypes.array
};

export default reduxForm({
    form: 'ProductAddForm',
    validate,
    initialValues: { Active: true }
})(ProductAddForm);