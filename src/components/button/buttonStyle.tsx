import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/globalStyle";

export const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: COLORS.blue, 
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: 'white',
      fontSize: 16,
    },
  });