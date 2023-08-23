import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BasketCard from '../../components/basketCard/basketCard';


const mockStore = configureStore([]);

describe('BasketCard Component Tests', () => {
  test('BasketCard renders correctly', () => {
    const initialState = {

    };
    const store = mockStore(initialState);

    const props = {
      name: 'Product Name',
      price: 10,
      item: {
        quantity: 3,
      },
    };

    const { getByText } = render(
      <Provider store={store}>
        <BasketCard {...props} />
      </Provider>
    );

    const nameElement = getByText('Product Name');
    const priceElement = getByText('10');
    const quantityElement = getByText('3');

    expect(nameElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
    expect(quantityElement).toBeTruthy();
  });

  test('Button clicks dispatch actions correctly', () => {
    const initialState = {
      
    };
    const store = mockStore(initialState);

    const props = {
      name: 'Product Name',
      price: 10,
      item: {
        quantity: 3,
      },
    };

    const { getByText } = render(
      <Provider store={store}>
        <BasketCard {...props} />
      </Provider>
    );

    const increaseButton = getByText('+');
    const decreaseButton = getByText('-');

    fireEvent.press(increaseButton);
    fireEvent.press(decreaseButton);
    const expectedActions = [
      { type: 'INCREASE_QUANTITY', payload: props }, // Increase action
      { type: 'DECREASE_QUANTITY', payload: props }, // Decrease action
    ];

   
    expect(store.getActions()).toEqual(expectedActions);

  });
});
