import React from "react";
import { shallow } from "enzyme";
import Banner from "../../../components/ui/Banner";

describe('Banner tests', () => {

    const wrapper = shallow(<Banner />);

    test('showing component successful', () => {

        expect(wrapper).toMatchSnapshot()

    })
})