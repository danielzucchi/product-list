import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductTile from './ProductTile'

const ProductListContainer = styled.div`
  margin: 30px auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`

const ProductTileList = ({
  products,
  hideSold,
  likedProducts,
  toggleLiked,
}) => {
  const filteredSoldProducts = products.filter(
    (product) => product.sold === false,
  )
  const productsToDisplay = hideSold ? filteredSoldProducts : products

  return (
    <ProductListContainer>
      {productsToDisplay.map(({ id, name, img, sold, price, brand }) => {
        const isLiked = likedProducts.includes(id)

        return (
          <li style={{ listStyle: 'none' }} key={id}>
            <ProductTile
              id={id}
              name={name}
              img={img}
              sold={sold}
              price={price}
              brand={brand}
              isLiked={isLiked}
              toggleLiked={toggleLiked}
            />
          </li>
        )
      })}
    </ProductListContainer>
  )
}

ProductTileList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      sold: PropTypes.bool,
      price: PropTypes.string,
      brand: PropTypes.string,
      description: PropTypes.string,
      seller: PropTypes.string,
    }),
  ).isRequired,
  hideSold: PropTypes.bool,
  likedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleLiked: PropTypes.func.isRequired,
}

ProductTileList.defaultProps = {
  hideSold: false,
}

export default ProductTileList
