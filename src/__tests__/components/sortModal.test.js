import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { sortProductsByName, sortLowToHighPrice, sortHighToLow } from '../../functions/sortFunctions';
import SortModal from '../../components/modal/modal';

describe('SortModal Component', () => {
  it('sorts products by name when "Alfabetik Sırala" is pressed', () => {
    const products = [
      { name: 'Banana', price: 1 },
      { name: 'Apple', price: 2 },
   
    ];
    const setProducts = jest.fn();
    const onClose = jest.fn();
    
    const { getByText } = render(
      <SortModal visible={true} onClose={onClose} products={products} setProducts={setProducts} />
    );

    fireEvent.press(getByText('Alfabetik Sırala'));

    expect(setProducts).toHaveBeenCalledWith(sortProductsByName(products));
    expect(onClose).toHaveBeenCalled();
  });

  it('sorts products from low to high price when "Düşükten Yükseğe Sırala" is pressed', () => {
    
  });

  it('sorts products from high to low price when "Yüksekten Düşüğe Sırala" is pressed', () => {

  });
});
