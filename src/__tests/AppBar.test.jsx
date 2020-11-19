import React from 'react'
import { shallow } from 'enzyme'
import AppBar from '../components/AppBar'

describe('AppBar tests', () => {
  it('when all props are present matches snapshot', () => {
    const wrapper = shallow(
      <AppBar likedProducts={['Product one', 'Product two']} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('when liked products, show liked products dorpdown', () => {
    const wrapper = shallow(
      <AppBar likedProducts={['Product one', 'Product two']} />,
    )

    const button = wrapper.findWhere((node) => node.name() === 'styled.button')
    button.simulate('click')

    expect(wrapper.findWhere((node) => node.name() === 'li')).toHaveLength(2)
    expect(wrapper).toMatchSnapshot()
  })
})
