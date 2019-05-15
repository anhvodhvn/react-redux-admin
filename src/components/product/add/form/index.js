import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import renderTextField from '../../../base/renderTextField';
import renderSelectField from '../../../base/renderSelectField';
import ErrorMessage from "../../../base/errorMessage";

import validate from './validate';

import styles from '../styles';

const ProductAddForm = (props) => {
    const { handleSubmit, submitError, locationList, categoryList } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" component={renderTextField} label="Name"/>

            <Field name="location" component={renderSelectField} label="Location">
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="category" component={renderSelectField} label="Category">
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="price" component={renderTextField} label="Price"/>

            { submitError ? <ErrorMessage errorMessage={submitError.error} /> : null }

            <div style={styles.buttons}>
                <Link to="/product">
                    <RaisedButton label="Cancel"/>
                </Link>

                <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true}/>
            </div>
        </form>
    );
};
  
ProductAddForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitError: PropTypes.object,
    locationList: PropTypes.array,
    categoryList: PropTypes.array
};

export default reduxForm({
    form: 'ProductAddForm',
    validate
})(ProductAddForm);