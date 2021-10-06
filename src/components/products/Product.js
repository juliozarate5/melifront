import React from 'react'
import { truncateTitle } from '../../utils/Utils';
import PropTypes from 'prop-types';

export default function Product({d, i}) {
    return (
        <div 
            className="col-lg-3 col-md-4 col-sm-2 col-12 mb-4"
            key={i}
        >
            <div 
                className="card border-0 shadow custom-card"
                
            >
                <a href={d.url} target="_blank">
                <img 
                    src={d.imageUrl} 
                    className="imagen" 
                    alt="Imagen"
                />
                </a>  
                <div className="card-body">
                    <p 
                        className="card-text"
                    >
                        {truncateTitle(d.title)}
                                                    
                    </p>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    d: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}