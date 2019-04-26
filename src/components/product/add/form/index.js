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

const ProductAddForm = (props) => {
    const {
        handleSubmit, handleChangeLocation, handleChangeCategory, locationList, categoryList
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" component={renderTextField} label="Name"/>

            <SelectField floatingLabelText="City" fullWidth={true} onChange={handleChangeLocation}>
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <SelectField floatingLabelText="Category" fullWidth={true} onChange={handleChangeCategory}>
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} />

            <TextField hintText="Price" floatingLabelText="Price" fullWidth={true} />

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
    handleChangeLocation: PropTypes.func,
    handleChangeCategory: PropTypes.func,
    locationList: PropTypes.array,
    categoryList: PropTypes.array
};

export default reduxForm({
    form: 'ProductAddForm',
    validate
})(ProductAddForm);