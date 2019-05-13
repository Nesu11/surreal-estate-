import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../src/property-card';

describe('Property card test', () => {
  it('renders title/description', () => {
    const wrapper = shallow((
      <PropertyCard
        title="mock 4 bedroom"
      />
    ));
    expect(wrapper.find('.title').text()).toBe('mock 4 bedroom');
  });
  it('renders type of property', () => {
    const wrapper = shallow((
      <PropertyCard type="mockType" />
    ));
    expect(wrapper.find('.type').text()).toBe('mockType');
  });
  it('renders number of bathrooms', () => {
    const wrapper = shallow((
      <PropertyCard bathrooms="3" />
    ));
    expect(wrapper.find('.bathrooms').text()).toBe('3');
  });
  it('renders number of bedrooms', () => {
    const wrapper = shallow((
      <PropertyCard bedrooms="4" />
    ));
    expect(wrapper.find('.bedrooms').text()).toBe('4');
  });
  it('renders price of property', () => {
    const wrapper = shallow((
      <PropertyCard price="£987653" />
    ));
    expect(wrapper.find('.price').text()).toBe('£987653');
  });
  it('renders the city', () => {
    const wrapper = shallow((
      <PropertyCard city="Manchester" />
    ));
    expect(wrapper.find('.city').text()).toBe('Manchester');
  });
  it('renders the email', () => {
    const wrapper = shallow((
      <PropertyCard email="mock@mail.com" />
    ));
    expect(wrapper.find('.email').text()).toBe('mock@mail.com');
  });
});
