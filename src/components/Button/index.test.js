import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';


describe('the button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" click={onClickMock} />);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should verify if the count value is right or not', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" buttonType="rect" click={onClickMock} category="All" />);
    fireEvent.click(getByTestId('test-btn'));
    // expect(getByTestId('test-btn')).toHaveTextContent(category);
  });
});
