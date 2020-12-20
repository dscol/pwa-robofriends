import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CounterButton />)
    })

    it('expect to render CounterButton component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('Increment CounterButton component', () => {
        expect(wrapper.text()).toEqual('Count: 0');
        wrapper.find('button').simulate('click');
        expect(wrapper.text()).toEqual('Count: 1');
    })
})