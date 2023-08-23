import { Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Screen from '../../components/Screen/Screen'
import Header from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../../components/basketCard/basketCard'
import { BasketCardType } from './basketTypes'
import { styles } from './basketStyle'

const Basket: FunctionComponent<BasketCardType> = props => {
  const dispatch = useDispatch();
  const basketList = useSelector((state: any) => state.basketList.basketList);


  const handleAddToCart = () => {
    dispatch({type:"CLEAR_BASKET",payload:[]})
    };
  
  // Sepetteki ürünlerin toplam fiyatını hesaplayan func.
  const totalAmount = basketList.reduce((total: number, product: { price: string; quantity: any }) => {
    const productPrice = parseFloat(product.price);
    const productQuantity = product.quantity;
    return total + (productPrice * productQuantity);
  }, 0); // Başlangıç değeri 0

  useEffect(() => {
  }, [basketList])

  const renderBasketCard = (props: any) => {
    return (
      <BasketCard
        key={props.item.id}
        price={props.item.price}
        name={props.item.name}
        item={props.item}
        onPress={() => {
          null
        } } quantity={props.item.quantity} />
    );
  };

  return (
    <Screen>
      <View style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#EBF0F0" />
        <SafeAreaView style={{ flex: 1 }}>
          <Header title="E-Market" noBack={true} name="E-Market" />
      
            {
              basketList.length !== 0 ? (
                <FlatList
                  data={basketList}
                  
                  renderItem={renderBasketCard}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <Text>sepet boş.. Ürün eklemek için ana sayfaya gidiniz.</Text>
              )
            }

          {
            basketList.length !==0 ?(
              <View>
              <View style={styles.priceButtonWrapper}>
                <View>
                  <Text>Price:</Text>
                  <Text>{totalAmount.toFixed(2)}</Text>
                </View>
                  <Button title="Complete" onPress={handleAddToCart} />
              </View>
            </View>
            ): null

          }

        </SafeAreaView>
      </View>
    </Screen>
  )
}


export default Basket

