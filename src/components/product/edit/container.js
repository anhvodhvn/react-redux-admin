import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import { editProduct } from '../../../actions/product';
import CONSTANTS from '../../../utils/constants';

import styles from './styles';
class ProductEdit extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let product = {
            id: 'b95e9f80-67f7-11e9-863b-d30e0d39d98b',
            name: 'Macbook Air Ultimate 2025',
            image: 'https://s3.amazonaws.com/aws-product-images/product/working.jpg'
        };
        let { editProduct } = this.props;
        return editProduct(product);
    }

    handleChangeLocation(event, index, value) {
        //this.setState({ location: value });
    }

    handleChangeCategory(event, index, value) {
        //this.setState({ category: value });
    }

    render() {
        let {
            product: {
                ProductName: name,
                ExpirationDate: expiration,
                Location: location,
                Category: category,
                Price: price
            }
        } = this.props;
        expiration = expiration ? new Date(moment(expiration).format('YYYY-MM-DD')) : null;
        location = location ? parseInt(location.Code) : null;
        category = category ? parseInt(category.Code) : null;
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} value={name} />

                <SelectField floatingLabelText="City" value={location} fullWidth={true} onChange={this.handleChangeLocation}>
                    { CONSTANTS.LOCATION.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
                </SelectField>

                <SelectField floatingLabelText="Category" value={category} fullWidth={true} onChange={this.handleChangeCategory}>
                    { CONSTANTS.CATEGORY.map((item) => <MenuItem key={item.Code} value={item.Code} primaryText={item.Name}/>) }
                </SelectField>

                <DatePicker hintText="Expiration Date" floatingLabelText="Expiration Date" fullWidth={true} value={expiration} />

                <TextField hintText="Price" floatingLabelText="Price" fullWidth={true} value={price} />

                <div style={styles.toggleDiv}>
                    <Toggle label="Disabled" labelStyle={styles.toggleLabel} />
                </div>

                <Divider/>

                <div style={styles.buttons}>
                    <Link to="/product">
                        <RaisedButton label="Cancel"/>
                    </Link>

                    <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true} />
                </div>
            </form>
        );
    }
}

ProductEdit.propTypes = {
    product: PropTypes.object,
    editProduct: PropTypes.func
};

const mapStateToProps = state => {
    const { productItem } = state.productReducer;
    return {
        product: productItem
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        editProduct
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);