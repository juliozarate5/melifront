import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

export default function Products({products}) {

    return (
        <div className="row mt-5">
            {
                // eslint-disable-next-line
                products.map((d, i) => 
                    (
                        <Product
                            d={d} 
                            i={i}
                        />
                    )
                )
            }
            </div>
    )
}

Products.propTypes = {
    products: PropTypes.array
}