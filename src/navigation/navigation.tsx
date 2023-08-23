import {RootNavigationProps} from './navigationProps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import React, {FunctionComponent, useEffect,useState} from 'react';
import Home from '../screens/Home/home';

import Basket from '../screens/Basket/basket';
import Favorite from '../screens/Favorite/favorite';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../screens/Home/home';
import Detail from '../screens/Detail/detail';



export const rootNavigationRef =
  createNavigationContainerRef<RootNavigationProps>();
const Tab = createBottomTabNavigator();

const RootNavigation: FunctionComponent = () => {
  const dispatch = useDispatch();
  const basketList = useSelector((state: any) => state.basketList.basketList);
  const HomeStack = createStackNavigator();

  const [basketCount, setBasketCount] = useState(0);
  useEffect( () => {
    const totalQuantity = basketList.reduce((total: any, product: { quantity: any; }) => total + product.quantity, 0);
    setBasketCount(totalQuantity)
  }, [basketList]);
  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    );
  };
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={20} color="blue" />
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarBadge: basketCount,
            headerShown: false,
            tabBarIcon: () => <Icon name="cart-plus" size={20} color="blue" />
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="heart" size={20} color="blue" />
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="user" size={20} color="blue" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;


