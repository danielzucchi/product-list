import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import placeholderImage from '../assets/placeholder-image.png'
import LikeSign from '../assets/like.svg'

const ProductTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 10px 2px;
`

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: block;
  position: relative;
  &::after {
    ${({ sold }) =>
      sold &&
      `
    content: ' ';
    z-index: 1;
    display: block;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    `}
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const ProductBrand = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

const ProductName = styled.p`
  margin: 0;
  font-size: 12px;
`

const ProductPrice = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

const SoldLabel = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 40px;
  right: 50px;
  z-index: 2;
`

const LikeButton = styled.button`
  background-image: url(${LikeSign});
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ isLiked }) => (isLiked ? '#d72d2d' : '#fff')};
  border: 1px solid #999999;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  outline: none;
`

const addDefaultSrc = (e) => {
  e.target.src = placeholderImage
}

const ProductTile = ({
  id,
  name,
  img,
  sold,
  price,
  brand,
  isLiked,
  toggleLiked,
}) => (
  <ProductTileWrapper>
    <ProductImageWrapper sold={sold}>
      <LikeButton
        isLiked={isLiked}
        type="button"
        onClick={() => toggleLiked(id)}
      />
      {sold && <SoldLabel>Sold</SoldLabel>}
      <ProductImage src={img} onError={addDefaultSrc} alt={name} />
    </ProductImageWrapper>
    <ProductBrand>{brand}</ProductBrand>
    <ProductName>{name}</ProductName>
    <ProductPrice>{`£${price}`}</ProductPrice>
  </ProductTileWrapper>
)

ProductTile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  sold: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLiked: PropTypes.func.isRequired,
}

export default ProductTile
