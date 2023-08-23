import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../utils/globalStyle";

const Header = (props: any) => {
  const navigation = useNavigation();
  //Geri butonuna tıklandığında tetiklenen bir geri sayfaya yönlendiren fonk.
  const handleBack = () => {
    if (props.backNav) {
      props.backNav;
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.headerContainer, { backgroundColor: "blue" }]}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,


        }}
      >
        <View style={{ flex: 2 }}>
          {props.noBack === undefined ? (
            <TouchableOpacity onPress={handleBack}>
              <Icon name="arrow-left" size={20} color={COLORS.lightBlue} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            flex: 8,

          }}
        >
          <Text style={{ height: 40, color: "white", fontSize: 20, fontWeight: '600' }}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
    justifyContent: "flex-start",
    height: 60,
  },
});