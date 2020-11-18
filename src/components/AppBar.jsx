import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LikeSign from '../assets/like.svg'

const MenuWrapper = styled.div`
  margin: 0 auto;
  height: 20px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 37, 174, 1) 0%,
    rgba(241, 147, 55, 1) 53.4%,
    rgba(250, 237, 56, 1) 99.5%
  );
  padding: 20px;
  box-shadow: 0 3px 3px #999999;
`

const Title = styled.div`
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`

const LikedButton = styled.button`
  background-image: url(${LikeSign});
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ isLiked }) => (isLiked ? '#d72d2d' : '#fff')};
  border: 1px solid #999999;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 20px;
  outline: none;
`

const LikedList = styled.div`
  min-height: 40px;
  width: 250px;
  background-color: #fff;
  position: absolute;
  top: 50px;
  right: 20px;
  border: 1px solid #3e3e3f;
  border-radius: 5px;
  z-index: 100;
  padding: 10px 5px;
`

const LikedListLabel = styled.p`
  font-size: 15px;
  margin: 2px 5px;
`

const AppBar = ({ likedProducts }) => {
  const [likedListVisible, toggleLikedList] = useState(false)

  return (
    <MenuWrapper>
      <Title>Products</Title>
      <LikedButton
        type="button"
        onClick={() => toggleLikedList(!likedListVisible)}
      />
      {likedListVisible && (
        <LikedList>
          {likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <li style={{ listStyle: 'none' }}>
                <LikedListLabel>{product}</LikedListLabel>
              </li>
            ))
          ) : (
            <LikedListLabel>No liked products yet.</LikedListLabel>
          )}
        </LikedList>
      )}
    </MenuWrapper>
  )
}

AppBar.propTypes = {
  likedProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AppBar
