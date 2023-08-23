export type DetailPagePropsType = {
    data?: DetailPageStateType;
  };
  
  type DetailPageStateType = {
    image?: string;
    title?: string;
    price?: string;
    description?: string;
    isFavorite?: boolean;
  };
  