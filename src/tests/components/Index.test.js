import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import Index from '../../components/Index';

describe('Index tests', () => {

    test('showing component successful', () => {
        const wrapper = shallow(<Index />)
        expect(wrapper).toMatchSnapshot();
    });

});