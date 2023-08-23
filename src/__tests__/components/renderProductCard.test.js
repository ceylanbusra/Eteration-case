import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Icon from 'react-native-vector-icons/FontAwesome'; // Simüle edeceğimiz modülleri burada ekliyoruz
import { RenderProductCard } from '../../components/renderProductCard/renderProductCard';


const mockStore = configureStore([]);
const store = mockStore({});

describe('RenderProductCard', () => {
  it('renders correctly and handles interactions', () => {
    
    jest.mock('react-native-vector-icons/FontAwesome', () => ({
      __esModule: true,
      default: 'IconComponent',
      
    }));

    const props = {
      onPress: jest.fn(),
      item: { id: 1, name: 'Test Product', price: 10, image: 'test-image-uri' },
    };
    
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <RenderProductCard {...props} />
      </Provider>
    );

    const icon = getByTestId('favorite-icon');
    fireEvent.press(icon);
    expect(icon).toBeTruthy(); r

    const addToCartButton = getByText('Add to Cart');
    fireEvent.press(addToCartButton);
    expect(addToCartButton).toBeTruthy(); 
  });
});
