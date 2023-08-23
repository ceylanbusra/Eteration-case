import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './buttonStyle';
import { ButtonType } from './buttonType';

const Button: FC<ButtonType> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;
