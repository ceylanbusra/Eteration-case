interface AuthState {
  product: any;
  loading: boolean;
}

const initialState: AuthState = {
  product: [],
  loading: true,
};

const productReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {

    case "GET_PRODUCT_SUCCESS": //Apiden dönen cevaba göre success ise responsu product stateine atayan func.
      return {
        ...state,
        product: action.payload.map((item: any) => ({
          ...item,
          isFavorite: false, // product listesine favori listesine ekli diye kontrolü için eklendi.
        })),
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;