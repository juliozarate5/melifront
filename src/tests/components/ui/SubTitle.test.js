import React from "react";
import { shallow } from "enzyme";
import SubTitle from "../../../components/ui/SubTitle";

describe('Subtitle tests', () => {

    const subtitle = "subtitle";
    const wrapper = shallow(<SubTitle subtitle={subtitle}/>);

    test('showing component successful', () => {

        expect(wrapper).toMatchSnapshot()
    });

    test('must have h1 with subtitle', () => {
        const h = wrapper.find('h1');
        expect( h.text().trim() ).toBe(subtitle);

    })

})