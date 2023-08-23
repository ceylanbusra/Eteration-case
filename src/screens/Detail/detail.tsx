import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import Header from '../../components/header';
import Screen from '../../components/Screen/Screen';
import { styles } from './detailStyle';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/button';


const Detail = (props: any) => {
  const dispatch = useDispatch();
  const temp = props.route.params;


  const handleAddToCart = () => {
    dispatch({ type: "ADD_BASKET", payload: temp.item })
  };
  return (
    <Screen>
      <View style={{ flex: 1, width: "100%" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#EBF0F0" />
        <Header title={temp.item.name} name={temp.item.name} />
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: temp.item.image }} />
            <Text style={styles.name}>{temp.item.name}</Text>
            <Text style={styles.description}>{temp.item.description}</Text>
            <View style={styles.priceButtonWrapper}>
              <View>
                <Text>Price:</Text>
                <Text>{temp.item.price} ₺</Text>
              </View>
              <Button title="Add to Cart" onPress={handleAddToCart} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Screen>
  )
}

export default Detail

