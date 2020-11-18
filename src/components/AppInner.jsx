import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import AppBar from './AppBar'
import ProductTileList from './ProductTileList'

const ProductListContainer = styled.div`
  margin: 50px auto;
  width: 70%;
`

const LoadingWrapper = styled.div`
  text-align: center;
  margin: 10% auto;
`

const SubMenuBar = styled.div`
  width: 100%;
  margin: 20px auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ResultsTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const HideButton = styled.button`
  background-color: ${({ hideSold }) => (hideSold ? '#3e3e3f' : '#fff')};
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  color: ${({ hideSold }) => (hideSold ? '#fff' : '##3e3e3f')};
  display: block;
  outline: none;
  border: 1px solid #3e3e3f;
  border-radius: 5px;
`

const AppInner = ({ isLoading, products, error }) => {
  const [hideSold, setHideSold] = useState(false)
  const [likedProducts, setLiked] = useState([])

  const likedProductsList = products
    ? products
        .filter((product) =>
          likedProducts.find((productId) => productId === product.id),
        )
        .map((product) => product.brand)
    : []

  const toggleLiked = (id) => {
    if (likedProducts.includes(id)) {
      setLiked(likedProducts.filter((productId) => id !== productId))
    } else {
      setLiked(likedProducts.concat(id))
    }
  }

  return (
    <>
      <AppBar likedProducts={likedProductsList} />
      {error && <ErrorMessage error={error} />}
      <ProductListContainer>
        <SubMenuBar>
          <ResultsTitle>Results</ResultsTitle>
          <HideButton
            type="button"
            hideSold={hideSold}
            onClick={() => setHideSold(!hideSold)}
          >
            {hideSold ? 'Show sold items' : 'Hide sold items'}
          </HideButton>
        </SubMenuBar>
        {isLoading && (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        )}
        {products && (
          <ProductTileList
            likedProducts={likedProducts}
            products={products}
            hideSold={hideSold}
            toggleLiked={toggleLiked}
          />
        )}
      </ProductListContainer>
    </>
  )
}

AppInner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
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
  ),
  error: PropTypes.string,
}

AppInner.defaultProps = {
  products: null,
  error: null,
}

export default AppInner
