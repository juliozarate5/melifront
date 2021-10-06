import React from "react";
import { shallow } from "enzyme";
import Product from "../../../components/products/Product";
import {truncateTitle} from '../../../utils/Utils';
jest.mock('../../../utils/Utils');

describe('product tests', () => {

    const d = {};
    const i = 1;

    const wrapper = shallow(<Product d={d} i={i}/>)

    test('showing component successful', () => {

        expect(wrapper).toMatchSnapshot();
    });

});