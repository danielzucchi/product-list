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
})
