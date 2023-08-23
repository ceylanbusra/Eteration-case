interface Product {
  item: any;
  id: string;
  name: string;
  
}

interface BasketItem extends Product {
  quantity: number;
}

interface BasketState {
  basketList: BasketItem[];
}

const initial_state: BasketState = {
  basketList: [],
};

type BasketAction = {
  type: string;
  payload: Product;
};

const BasketReducer = (state: BasketState = initial_state, action: BasketAction) => {
  switch (action.type) {

    case "ADD_BASKET":
      const productToAdd = action.payload;
      // ürün sepette var mı kontrolü
      const existingProductIndex = state.basketList.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        //ürüns epette varsa adetini arttıran func.
        const updatedBasketList = state.basketList.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );

        return {
          ...state,
          basketList: updatedBasketList,
        };
      } else {
        // Ürün sepette yoksa yeni ürün ekleyen func.
        return {
          ...state,
          basketList: [...state.basketList, { ...productToAdd, quantity: 1 }],
        };
      }

    case "INCREASE_QUANTITY":
      const increasedProductId: any = action.payload.item.id;

      const increasedBasketList = state.basketList.map(item => {
        if (item.id === increasedProductId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        basketList: increasedBasketList,
      };

    case "DECREASE_QUANTITY":
      const decreasedProductId: any = action.payload.item.id;
      const decreasedBasketList = state.basketList.map(item => {
        if (item.id === decreasedProductId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // Miktar sıfır olduğunda ürünü listden çıkar 
          return null;
        }
        return item;
      }).filter(Boolean); 

      return {
        ...state,
        basketList: decreasedBasketList,
      };


    case "CLEAR_BASKET":

      return {
        ...state,
        basketList: [],
      };
    default:
      return state;
  }
};

export default BasketReducer;
