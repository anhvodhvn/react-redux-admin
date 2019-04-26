import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import validate from './validate';

import styles from '../styles';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField  hintText={label}
                floatingLabelText={label}
                fullWidth={true}
                errorText={touched && error}
                {...input}
                {...custom} />
);

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField  floatingLabelText={label}
                  fullWidth={true}
                  errorText={touched && error}
                  {...input}
                  onChange={(event, index, value) => input.onChange(value)}
                  children={children}
                  {...custom} />
);

const ProductAddForm = (props) => {
    const { handleSubmit, locationList, categoryList } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" component={renderTextField} label="Name"/>

            <Field name="location" component={renderSelectField} label="Location">
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <Field name="category" component={renderSelectField} label="Category">
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </Field>

            <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} />

            <Field name="price" component={renderTextField} label="Price"/>

            <div style={styles.toggleDiv}>
                <Toggle label="Disabled" labelStyle={styles.toggleLabel} />
            </div>

            <Divider/>

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
    locationList: PropTypes.array,
    categoryList: PropTypes.array
};

export default reduxForm({
    form: 'ProductAddForm',
    validate
})(ProductAddForm);