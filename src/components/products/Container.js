import React from 'react'
import Paginator from '../ui/Paginator';
import SubTitle from '../ui/SubTitle';
import Products from './Products';
import PropTypes from 'prop-types';

const subtitle= "¡MÁS CATEGORÍAS EN CYBERLUNES 2021!";

export default function Container(
    {products, arrayTotal, pagination, handlePage, handleNext, handlePrevious}
    ) {
    return (
        <div className="container">
        <SubTitle subtitle={subtitle}/>
        <Products products={products}/>
        <Paginator 
          arrayTotal={arrayTotal}
          pagination={pagination}
          handlePrevious={handlePrevious} 
          handlePage={handlePage}
          handleNext={handleNext}
        />
    </div>
    )
}

Container.propTypes = {
  products: PropTypes.array.isRequired, 
  arrayTotal: PropTypes.array.isRequired, 
  pagination: PropTypes.object.isRequired, 
  handlePage: PropTypes.func.isRequired, 
  handleNext: PropTypes.func.isRequired, 
  handlePrevious: PropTypes.func.isRequired
}