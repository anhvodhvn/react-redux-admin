import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import styles from './styles';

class ProductAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} />

                <SelectField floatingLabelText="City" value="" fullWidth={true}>
                    <MenuItem key={0} primaryText="London"/>
                    <MenuItem key={1} primaryText="Paris"/>
                    <MenuItem key={2} primaryText="Rome"/>
                </SelectField>

                <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true}/>

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
    }
}

export default ProductAdd;