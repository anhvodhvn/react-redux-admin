import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { grey200 } from 'material-ui/styles/colors';

import styles from '../styles';

const LinkEdit = (id) => {
    return `/order/edit/${id}`;
};

const OrderList = (props) => {
    let {orders} = props;
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn style={styles.columns.id}>No.</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.code}>ID</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.name}>Merchant</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.status}>Status</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.total}>Total</TableHeaderColumn>
                    <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    (Array.isArray(orders) && orders.length) ?
                    orders.map((item, index) =>
                        <TableRow key={index+1}>
                            <TableRowColumn style={styles.columns.id}>{index+1}</TableRowColumn>
                            <TableRowColumn style={styles.columns.code}>{item.OrderId}</TableRowColumn>
                            <TableRowColumn style={styles.columns.name}>{item.Merchant.FullName + ' from ' + item.Merchant.Club}</TableRowColumn>
                            <TableRowColumn style={styles.columns.status}>{item.Status}</TableRowColumn>
                            <TableRowColumn style={styles.columns.total}>{item.Total + ` (${(item.Currency)})`}</TableRowColumn>
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

OrderList.propTypes = {
    orders: PropTypes.array
};

export default OrderList;