import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import styles from '../styles';

const OrderList = (props) => {
    let {orders} = props;
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn style={styles.columns.id}>No.</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.code}>ID</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.name}>Merchant</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.total}>Total</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.currency}>Currency</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                </TableRow>
            </TableHeader>
        </Table>
    );
};

OrderList.propTypes = {
    orders: PropTypes.array
};

export default OrderList;