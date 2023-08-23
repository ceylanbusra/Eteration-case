import {RouteProp} from '@react-navigation/native';

import {Keyof} from 'types';
import { DetailPagePropsType } from '../screens/Detail/detailType';

export type RootNavigationProps = {
  Home: undefined;
  Detail: {
    item?: DetailPagePropsType;
  };
  Favorite: undefined;
  Search: undefined;
  Basket: undefined;
};

export type RootNavigationRouteType<
  TPageName extends Keyof<RootNavigationProps>,
> = RouteProp<RootNavigationProps, TPageName>;