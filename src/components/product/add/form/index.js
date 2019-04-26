import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import styles from '../styles';
import CONSTANTS from '../../../../utils/constants';

const ProductAddForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} />

            <SelectField floatingLabelText="City" value={this.state.location} fullWidth={true} onChange={this.handleChangeLocation}>
                { CONSTANTS.LOCATION.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <SelectField floatingLabelText="Category" value={this.state.category} fullWidth={true} onChange={this.handleChangeCategory}>
                { CONSTANTS.CATEGORY.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
            </SelectField>

            <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} value={this.state.expiration} />

            <TextField hintText="Price" floatingLabelText="Price" fullWidth={true} value={this.state.price} />

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
  pristine: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.func
};

export default ProductAddForm;