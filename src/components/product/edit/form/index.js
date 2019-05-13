import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import moment from 'moment';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import ImageUpload from '../../../base/ImageUpload';

import validate from './validate';

import styles from '../styles';

const ProductEditForm = (props) => {
    let { 
        handleSubmit, locationList, categoryList,
        product: {
            Id: id,
            ProductName: name,
            ExpirationDate: expiration,
            Location: location,
            Category: category,
            Price: price
        } 
    } = props;
    expiration = expiration ? new Date(moment(expiration).format('YYYY-MM-DD')) : null;
    location = location ? parseInt(location.Code) : null;
    category = category ? parseInt(category.Code) : null;
    price = price ? parseInt(price) : 0;
    return (
        <form onSubmit={handleSubmit}>
            <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} value={name || ''} />

            <SelectField floatingLabelText="City" fullWidth={true} value={location}>
                { locationList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <SelectField floatingLabelText="Category" fullWidth={true} value={category}>
                { categoryList.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} value={expiration} />

            <TextField hintText="Price" floatingLabelText="Price" fullWidth={true} value={price}/>

            <div style={styles.toggleDiv}>
                <Toggle label="Disabled" labelStyle={styles.toggleLabel} />
            </div>

            <Divider/>

            <ImageUpload productId={id || ''}/>

            <Divider/>

            <div style={styles.buttons}>
                <Link to="/product">
                    <RaisedButton label="Cancel"/>
                </Link>

                <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true} />
            </div>
        </form>
    );
};
  
ProductEditForm.propTypes = {
    handleSubmit: PropTypes.func,
    product: PropTypes.object,
    locationList: PropTypes.array,
    categoryList: PropTypes.array
};

export default reduxForm({
    form: 'ProductEditForm',
    validate
})(ProductEditForm);