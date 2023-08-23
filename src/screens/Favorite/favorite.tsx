import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../../components/Screen/Screen'
import Header from '../../components/header'
import { RenderProductCard } from '../../components/renderProductCard/renderProductCard'
import { useDispatch, useSelector } from 'react-redux'
import styles from './favoriteStyle'
import { useNavigation } from '@react-navigation/native'



const Favorite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favList = useSelector((state: any) => state.favoriteList.favList);
  useEffect(() => {

  }, [favList])


  const renderProductCard = (props: any) => {
    return (
      <RenderProductCard
        key={props.item.id}
        image={props.item.image}
        price={props.item.price}
        name={props.item.name}
        item={props.item}
        onPress={() => {
          dispatch({type:"ADD_FAVORITE",payload:props.item}),
          navigation.navigate('Detail', {
            item: props.item,
          })
        }} />
    );
  };





  return (
    <Screen>
    <View style={{ flex: 1, width: "100%" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#EBF0F0" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="E-Market" noBack={true} name="E-Market" />
        <View style={styles.container}>
          {
            favList.length !==0  ? (
              <FlatList
              data={favList}
              keyExtractor={item => item.id}
              renderItem={renderProductCard}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
            ):(
              <Text>Favori listesi boş.. Ürün eklemek için ana sayfaya gidiniz.</Text>
            ) 
          }
    
        </View>
      </SafeAreaView>
    </View>
  </Screen>
  )
}

export default Favorite



