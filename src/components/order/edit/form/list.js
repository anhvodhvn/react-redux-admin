import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from '../styles';

const ProductList = (props) => {
    //let {products} = props;
    return (
        <div>
            <h3 style={styles.orderDetail}className>Order Detail</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn style={styles.products.id}>No.</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.code}>ID</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.name}>Merchant</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.status}>Status</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.total}>Total</TableHeaderColumn>
                        <TableHeaderColumn style={styles.products.edit}>Edit</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;