import React from 'react';
import { shallow } from 'enzyme';
import { ReportFiresForm, mapDispatchToProps } from './ReportFiresForm';
import { postUnverifiedFires } from '../../heplers/apiCalls/apiCalls';
import { mockFiresFromDb } from '../../MockData/mockUnverifiedFires';
import { mapStateToProps } from '../CurrentFires/CurrentFires';
import { addUnverifiedFire } from '../../actions/index';

describe('ReportFiresForm', () => {
  describe('handleChange', () => {
    test('should change the state on input', () => {
      const wrapper = shallow(<ReportFiresForm/>);

      const mockEvent = { target: { name: 'firstName', value : 'Austin'}};

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('firstName')).toEqual(mockEvent.target.value);
    });
  });

  describe('handlePostUnverifiedFires', () => {
    test('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            city:"",
            first_name:"",
            id:11,
            last_name:"",
            latitude:"",
            longitude:"",
            state:"",
            verified: false,
            zip_code:""
          })
        }));

      await postUnverifiedFires('Denver', 'austin', '11', 'Wiedenman', '45', '50', 'CO', false, 80219);

      expect(window.fetch).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch when addUnverifiedFire is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addUnverifiedFire(mockFiresFromDb)
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addUnverifiedFire(mockFiresFromDb);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
  
  test('should match snapshot', () => {
    const wrapper = shallow( < ReportFiresForm /> );

    expect(wrapper).toMatchSnapshot();
  });
});


  
  

  

