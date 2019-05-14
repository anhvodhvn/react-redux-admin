import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { grey200, pink500 } from 'material-ui/styles/colors';

import { getProductList } from '../../actions/product';
import { loading } from '../base/Loading/action';
import styles from './styles';

const LinkEdit = (id) => {
    return `/product/edit/${id}`;
};

class Products extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { getProductList, loading } = this.props;
        loading(() => getProductList());
    }

    render() {
        let { products } = this.props;
        return (
            <div>
                <Link to="/product/add" >
                    <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
                    <ContentAdd />
                    </FloatingActionButton>
                </Link>

                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.price}>Price</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.category}>Category</TableHeaderColumn>
                        <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            (Array.isArray(products) && products.length) ?
                            products.map((item, index) =>
                                <TableRow key={index+1}>
                                    <TableRowColumn style={styles.columns.id}>{index+1}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.name}>{item.ProductName}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.price}>{item.Price}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.category}>{item.Category ? item.Category.Name : ''}</TableRowColumn>
                                    <TableRowColumn style={styles.columns.edit}>
                                        <Link className="button" to={LinkEdit(item.Id)}>
                                        <FloatingActionButton zDepth={0} mini={true} backgroundColor={grey200} iconStyle={styles.editButton}>
                                            <ContentCreate  />
                                        </FloatingActionButton>
                                        </Link>
                                    </TableRowColumn>
                                </TableRow>
                            )
                            : null
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

Products.propTypes = {
    loading: PropTypes.func,
    products: PropTypes.array,
    getProductList: PropTypes.func
};

const mapStateToProps = state => {
    const { productList } = state.productReducer;
    return {
        products: productList
    };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loading,
        getProductList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);