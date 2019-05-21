import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500 } from 'material-ui/styles/colors';
import ProductList from './list';

import { getProductList } from '../../actions/product';
import { loading } from '../../actions/loading';
import styles from './styles';

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

                <ProductList products={products} />
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