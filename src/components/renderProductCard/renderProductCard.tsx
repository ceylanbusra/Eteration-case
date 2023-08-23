import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import { styles } from './renderProductCardStyle';
import { RenderProductCardType } from './renderProductCardType';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button/button';
export const RenderProductCard: FunctionComponent<RenderProductCardType> = props => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: props.item });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: props.item });
    }
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_BASKET", payload: props.item })
  };

  return (
    <TouchableOpacity style={styles.productWrapper} onPress={props.onPress}>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleToggleFavorite}>
      <Icon
  name="star"
  size={20}
  color={isFavorite ? 'blue' : 'gray'}
  testID="favorite-icon" 
/>
      </TouchableOpacity>
      <Image style={styles.imageStyle} source={{ uri: props.image }} />
      <Text style={styles.amountStyle}>{props.price} ₺</Text>
      <Text style={styles.productNameStyle}>{props.name}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />

    </TouchableOpacity>
  )
}



