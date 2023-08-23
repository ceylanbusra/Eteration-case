import {
    sortProductsByName,
    sortLowToHighPrice,
    sortHighToLow,
  } from '../../functions/sortFunctions'; 
  
  describe('Product Sorting Functions', () => {
    const products = [
      { name: 'Banana', price: 1 },
      { name: 'Apple', price: 2 },
      { name: 'Orange', price: 3 },
    ];
  
    it('sortProductsByName sorts products by name', () => {
      const sortedProducts = sortProductsByName(products);
      expect(sortedProducts).toEqual([
        { name: 'Apple', price: 2 },
        { name: 'Banana', price: 1 },
        { name: 'Orange', price: 3 },
      ]);
    });
  
    it('sortLowToHighPrice sorts products from low to high price', () => {
      const sortedProducts = sortLowToHighPrice(products);
      expect(sortedProducts).toEqual([
        { name: 'Banana', price: 1 },
        { name: 'Apple', price: 2 },
        { name: 'Orange', price: 3 },
      ]);
    });
  
    it('sortHighToLow sorts products from high to low price', () => {
      const sortedProducts = sortHighToLow(products);
      expect(sortedProducts).toEqual([
        { name: 'Orange', price: 3 },
        { name: 'Apple', price: 2 },
        { name: 'Banana', price: 1 },
      ]);
    });
  });
  