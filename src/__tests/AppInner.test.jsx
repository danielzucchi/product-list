import React from 'react'
import { shallow } from 'enzyme'
import AppInner from '../components/AppInner'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import mockProducts from './mockProducts'

describe('AppInner tests', () => {
  it('when all props are presentmatches snapshot', () => {
    const wrapper = shallow(
      <AppInner isLoading={false} products={mockProducts} error={null} />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('shows loading spinner when loading', () => {
    const wrapper = shallow(<AppInner isLoading />)
    const loadingSpinner = wrapper.find(LoadingSpinner)
    expect(loadingSpinner).toBeDefined()
  })

  it('shows error when API throws error', () => {
    const wrapper = shallow(
      <AppInner
        isLoading={false}
        error="An error has occurred"
        products={null}
      />,
    )
    const error = wrapper.find(ErrorMessage)
    expect(error).toHaveLength(1)
  })
})
