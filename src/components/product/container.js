import React, { Component, PropTypes } from 'react';
import api from '../../api/api';

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
        let { products } = this.state;
        return (
            <div>
                <h1>Products</h1>
                {
                    (Array.isArray(products) && products.length) ?
                    <ul>
                        {
                            products.map((u, i) => 
                            <li key={i}>
                                <div>
                                    {u.ProductName}
                                </div>
                                <div>
                                    {u.ImageUrl}
                                </div>
                            </li>)
                        }
                    </ul>
                    : null
                }
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array,
    getProductList: PropTypes.func
};

export default Products;
