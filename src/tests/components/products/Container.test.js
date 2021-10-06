import React from "react";
import { shallow } from "enzyme";
import Container from "../../../components/products/Container";

describe('Container tests', () => {
    const products =  []; 
    const arrayTotal= []; 
    const pagination = {}; 
    const handlePage = jest.fn(); 
    const handleNext =  jest.fn();
    const handlePrevious = jest.fn();

    const wrapper = shallow(<Container
         handlePage={handlePage}
         products={products}
         arrayTotal={arrayTotal}
         pagination={pagination}
         handleNext={handleNext}
         handlePrevious={handlePrevious}
         />)

    test('showing component successful', () => {
        expect(wrapper).toMatchSnapshot
    });

});