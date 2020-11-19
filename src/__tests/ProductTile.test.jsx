import React from 'react'
import { shallow } from 'enzyme'
import ProductTile from '../components/ProductTile'

describe('ProductTile tests', () => {
  it('when all props are present matches snapshot', () => {
    const wrapper = shallow(
      <ProductTile
        id="1"
        name="Product one"
        img="img"
        sold={false}
        price="15"
        brand="sampleBrand"
        isLiked={false}
        toggleLiked={() => jest.fn()}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('when product is sold, shows sold label', () => {
    const wrapper = shallow(
      <ProductTile
        id="1"
        name="Product one"
        img="img"
        sold
        price="15"
        brand="sampleBrand"
        isLiked={false}
        toggleLiked={() => jest.fn()}
      />,
    )

    const soldLabel = wrapper.findWhere(
      (node) => node.name() === 'styled.p' && node.text() === 'Sold',
    )

    expect(soldLabel).toHaveLength(1)
    expect(wrapper).toMatchSnapshot()
  })
})
