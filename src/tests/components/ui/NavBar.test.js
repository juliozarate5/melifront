import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../../components/ui/NavBar";

describe('NavBar tests', () => {

    const title = "title";

    const wrapper = shallow(<NavBar title={title}/>);

    test('showing component successful', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('must have a with title', () => {

        const a = wrapper.find('a');
        expect( a.text().trim() ).toBe(title);

    })

    test('must have class navbar', () => {

        const nav = wrapper.find('nav');

        const className = nav.prop('className');

        expect(className.includes('navbar')).toBe(true)
    })

})