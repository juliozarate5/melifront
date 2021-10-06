import React from 'react';
import PropTypes from 'prop-types';

export default function Paginator(
    {pagination, arrayTotal, handlePrevious, handlePage, handleNext}
    ) {
    return (
        <nav aria-label="paginación" className="my-3">
        <ul className="pagination justify-content-center">
            <li className={`page-item ${pagination.pageNumber==0?"disabled":""}`}>
                <a 
                    onClick={handlePrevious} 
                    className="page-link"
                >
                    Anterior
                </a>
            </li>
            {
               arrayTotal.map((e, i) => (
                <li 
                    key={i}
                    className={`page-item ${pagination.pageNumber==i?"disabled":""}`}
                    >
                 <a 
                    onClick={() => handlePage(i)} 
                    className="page-link" 
                 >
                  {i+1}
                 </a>
                </li>
                )
               )
            }                       
    
            <li className={`page-item ${pagination.pageNumber==pagination.totalPages-1?"disabled":""}`}>
                <a 
                    onClick={handleNext} 
                    className="page-link" 
                    
                >
                    Siguiente
                </a>
            </li>
        </ul>
        </nav>
    )
}


Paginator.propTypes = {
    pagination: PropTypes.shape({
        pageNumber: PropTypes.number,
        totalPages: PropTypes.number,
    }).isRequired, 
    arrayTotal: PropTypes.array.isRequired, 
    handlePrevious: PropTypes.func.isRequired, 
    handlePage: PropTypes.func.isRequired, 
    handleNext: PropTypes.func.isRequired
}
