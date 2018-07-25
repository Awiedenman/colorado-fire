import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { storeCurrentFireData } from '../../actions';
import { currentFireRequest } from '../../heplers/apiCalls/apiCalls';
import { fireDataCleaner } from '../../heplers/cleaner';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { mockParsedFireData } from '../../MockData/mockParsedFireData';

jest.mock('../../heplers/apiCalls/apiCalls', () => ({
  currentFireRequest: jest.fn().mockImplementation(() => JSON.stringify(mockParsedFireData))
}))

describe('App', () => {
  let wrapper;
  const mockStoreCurrentFireData = jest.fn(); 

  describe('componentDidMount', () => {
    wrapper = shallow(
    <App
      storeCurrentFireData = {mockStoreCurrentFireData}
    />)

    console.log(wrapper)

    test('should fetch initial fire data on page load', async () => {
      await expect(mockStoreCurrentFireData).toHaveBeenCalled();
    })
  })
  
  describe('mapDispatchToProps', () => {
    test('should call dispatch when storeCurrentFireData is called', () => {
      const mockDispatch = jest.fn();
      // const mockCleanFireData = mockCleanFireData

      const actionToDispatch = storeCurrentFireData(mockCleanFireData);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.storeCurrentFireData(mockCleanFireData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
