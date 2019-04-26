import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import { addProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';

import styles from './styles';

class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            category: null,
            expiration: new Date(),
            price: 50
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let product = {
            name: 'Acer Xpatch 2010'
        };
        let { addProduct } = this.props;
        return addProduct(product);
    }

    handleChangeLocation(event, index, value) {
        this.setState({ location: value });
    }

    handleChangeCategory(event, index, value) {
        this.setState({ category: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
    }
}

ProductAdd.propTypes = {
    product: PropTypes.object,
    addProduct: PropTypes.func
};

const mapStateToProps = state => {
    const { productItem } = state.productReducer;
    return {
        product: productItem
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addProduct
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);