import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AppInner from './components/AppInner'

const AppWrapper = styled.div`
  margin: 0;
  width: 100%;
`

const App = () => {
  const [isLoading, setLoading] = useState(false)
  const [fetchError, setError] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      await axios
        .get('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
        .then((response) => {
          setLoading(false)
          setProducts(response.data)
          setError(null)
        })
        .catch((error) => {
          setLoading(false)
          setError(`${error.message}. Please refresh page to try again.`)
        })
    }

    fetchProducts()
  }, [setProducts, setError])

  return (
    <AppWrapper>
      <AppInner isLoading={isLoading} products={products} error={fetchError} />
    </AppWrapper>
  )
}

export default App
