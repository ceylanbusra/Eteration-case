export type RenderProductCardType = {
    price?: string;
    name?: string;
    image: string;
    item?:any;
    isFavorite?:boolean
  
    onPress?: () => void;
  };