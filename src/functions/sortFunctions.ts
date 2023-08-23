export function sortProductsByName(products: Product[]): Product[] {
    const templist = products.sort((a, b) => a.name > b.name ? 1 : -1);
    return templist;
  }
  export function sortLowToHighPrice(products: Product[]): Product[] {
    const temp = products.sort((a, b) => a.price - b.price)
    return temp;
  }
  export function sortHighToLow(products: Product[]): Product[] {
    const temp = products.sort((a, b) => b.price - a.price);
    return temp;
  }