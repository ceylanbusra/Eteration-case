// __tests__/components/renderProductCard.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Icon from 'react-native-vector-icons/FontAwesome'; // Simüle edeceğimiz modülleri burada ekliyoruz
import { RenderProductCard } from '../../components/renderProductCard/renderProductCard';

// Redux store'umuzu hazırlıyoruz
const mockStore = configureStore([]);
const store = mockStore({}); // Başlangıçta boş bir store ile başlayabiliriz

describe('RenderProductCard', () => {
  it('renders correctly and handles interactions', () => {
    // İkon bileşenini mock olarak değiştiriyoruz
    jest.mock('react-native-vector-icons/FontAwesome', () => ({
      __esModule: true,
      default: 'IconComponent',
      // Diğer kullanılan özellikleri de burada eklemelisiniz
    }));

    // RenderProductCard bileşenini test ediyoruz
    const props = {
      onPress: jest.fn(),
      item: { id: 1, name: 'Test Product', price: 10, image: 'test-image-uri' },
    };
    
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <RenderProductCard {...props} />
      </Provider>
    );

    // Favori ikonunu tıklayarak beklendiği gibi çalışıp çalışmadığını kontrol ediyoruz
    const icon = getByTestId('favorite-icon');
    fireEvent.press(icon);
    expect(icon).toBeTruthy(); // İkonun varlığı kontrol edilebilir

    // Sepete ekle butonunu tıklayarak beklendiği gibi çalışıp çalışmadığını kontrol ediyoruz
    const addToCartButton = getByText('Add to Cart');
    fireEvent.press(addToCartButton);
    expect(addToCartButton).toBeTruthy(); // Butonun varlığı kontrol edilebilir
  });
});
