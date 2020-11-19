import React from 'react'
import { shallow } from 'enzyme'
import ProductTileList from '../components/ProductTileList'
import mockProducts from './mockProducts'

describe('ProducTileList test', () => {
  it('when all props are presentmatches snapshot', () => {
    const wrapper = shallow(
      <ProductTileList
        hideSold={false}
        products={mockProducts}
        likedProducts={['2', '3']}
        toggleLiked={() => jest.fn()}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('when hideSold products is off, show sold products', () => {
    const wrapper = shallow(
      <ProductTileList
        hideSold={false}
        products={mockProducts}
        likedProducts={['2', '3']}
        toggleLiked={() => jest.fn()}
      />,
    )
    const list = wrapper.findWhere((node) => node.name() === 'ProductTile')
    expect(list).toHaveLength(4)
  })

  it('when hideSold products is on, hides sold products', () => {
    const wrapper = shallow(
      <ProductTileList
        hideSold
        products={mockProducts}
        likedProducts={['2', '3']}
        toggleLiked={() => jest.fn()}
      />,
    )
    const list = wrapper.findWhere((node) => node.name() === 'ProductTile')
    expect(list).toHaveLength(3)
  })
})
