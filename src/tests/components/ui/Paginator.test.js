import React from "react";
import { shallow } from "enzyme";
import Paginator from "../../../components/ui/Paginator";

describe('Paginator tests', () => {

    const pagination = {}; 
    const arrayTotal = [];
    const handlePrevious = jest.fn(); 
    const handlePage = jest.fn();
    const handleNext = jest.fn();

    const wrapper = shallow(<Paginator 
        pagination={pagination}
        arrayTotal={arrayTotal}
        handlePrevious={handlePrevious}
        handlePage={handlePage}
        handleNext={handleNext}
    />);

    test('showing component successful', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('must change paginationNumber', () => {

        const a = wrapper.find('a.page-link').first();

        a.simulate('click');        
    })
})