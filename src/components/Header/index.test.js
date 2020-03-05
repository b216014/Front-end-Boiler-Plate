import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './index';


describe('the Header component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header testID="test-btn">Test text</Header>);
    expect(asFragment()).toMatchSnapshot();
  });
});
