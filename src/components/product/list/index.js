import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { grey200 } from 'material-ui/styles/colors';

import styles from '../styles';

const LinkEdit = (id) => {
    return `/product/edit/${id}`;
};

let ProductList = (props) => {
    let {products} = props;
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn style={styles.columns.id}>No.</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.code}>ID</TableHeaderColumn>
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
                            <TableRowColumn style={styles.columns.code}>{item.ProductId}</TableRowColumn>
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
    );
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;