import React, { PropTypes } from 'react';

let ProductList = (props) => {
    let {products} = props;
    return (
        <div>{products}</div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;