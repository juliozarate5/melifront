import React from "react";
import { shallow } from "enzyme";
import Products from "../../../components/products/Products";

describe('products tests', () => {

    const products = [];

    test('showing component successful', () => {
        const wrapper = shallow(<Products products={products}/>)
        expect(wrapper).toMatchSnapshot();
    });

});