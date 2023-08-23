interface FavoriteItem {
  id: number;
  name: string;
  isFavorite: boolean;
}

interface FavoriteListState {
  favList: FavoriteItem[];
}

const initial_state: FavoriteListState = {
  favList: [],
};

const FavoriteListReducer = (
  state: FavoriteListState = initial_state,
  action: { type: string; payload: FavoriteItem }
) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const isAlreadyAdded = state.favList.some(
        (item) => item.id === action.payload.id
      );

      if (isAlreadyAdded) {
        return state; 
      }

      const newFavorite: FavoriteItem = {
        ...action.payload,
        isFavorite: true,
      };
      return {
        ...state,
        favList: [...state.favList, newFavorite],
      };

    case "REMOVE_FAVORITE":
      return {
        favList: state.favList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavorite: false,
            };
          }
          return item;
        }).filter((item) => item.isFavorite),
      };

    default:
      return state;
  }
};

export default FavoriteListReducer;
