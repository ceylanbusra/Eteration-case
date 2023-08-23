import React, { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { sortProductsByName, sortLowToHighPrice, sortHighToLow } from '../../functions/sortFunctions';
import styles from './modalStyle';


const SortModal = ({ visible, onClose, products, setProducts }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyles}>
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
              const sortedProduct = sortProductsByName(products);
              setProducts(sortedProduct);
              onClose();
            }}>
            <Text style={styles.pressableTextColor}>Alfabetik Sırala</Text>
          </Pressable>
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
              const sortedProduct = sortLowToHighPrice(products);
              setProducts(sortedProduct);
              onClose();
            }}>
            <Text style={styles.pressableTextColor}>Düşükten Yükseğe Sırala</Text>
          </Pressable>
          <Pressable
            style={styles.pressableStyle}
            onPress={() => {
              const sortedProduct = sortHighToLow(products);
              setProducts(sortedProduct);
              onClose();
            }}>
            <Text style={styles.pressableTextColor}>Yüksekten Düşüğe Sırala</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal;
