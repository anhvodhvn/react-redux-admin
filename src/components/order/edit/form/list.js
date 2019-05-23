import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from '../styles';

const ProductList = (props) => {
    let {products} = props;
    return (
        <div>
            <h3 style={styles.orderDetail}className>Order Detail</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn style={styles.products.id}>No.</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.code}>ID</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.name}>Name</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.quantity}>Quantity</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.price}>Price</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.total}>Total</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {
                    (Array.isArray(products) && products.length) ?
                    products.map((item, index) =>
                        <TableRow key={index+1}>
                            <TableRowColumn style={styles.products.id}>{index+1}</TableRowColumn>
                            <TableRowColumn style={styles.products.code}>{item.ProductId}</TableRowColumn>
                            <TableRowColumn style={styles.products.name}>{item.ProductName || ''}</TableRowColumn>
                            <TableRowColumn style={styles.products.quantity}>{item.Quantity}</TableRowColumn>
                            <TableRowColumn style={styles.products.price}>{item.Price}</TableRowColumn>
                            <TableRowColumn style={styles.products.total}>{item.Total}</TableRowColumn>
                        </TableRow>
                    )
                    : null
                }
            </TableBody>
            </Table>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;