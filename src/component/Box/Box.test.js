import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Box from './Box'

configure({ adapter: new Adapter() })

describe('<Box />', () => {
    it('should render one div unchecked', () => {
        const wrapper = shallow(<Box />)
        expect(wrapper.contains(<div className="box_unchecked" />))
    })

    it('should render one div checked', () => {
        const wrapper = shallow(<Box checked />)
        expect(wrapper.contains(<div className="box_unchecked" />))
    })
})
