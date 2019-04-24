import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { grey200, pink500 } from 'material-ui/styles/colors';

import api from '../../api/api';
import styles from './styles';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        return api.get('/product/list')
        .then((res) => {
            let { products } = res.data;
            this.setState({ products: products });
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <Link to="/form" >
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
                                        <Link className="button" to="/form">
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
    products: PropTypes.array
};

export default Products;