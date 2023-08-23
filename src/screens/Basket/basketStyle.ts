import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer:{
    flex: 1, 
    width:'100%',

  },
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700'
    },
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      width: 100,
      height: 100,
      borderRadius: 8
    },
    metaInfo: {
      marginLeft: 10
    },
    title: {
      fontSize: 18,
      width: 200,
      padding: 10
    },
    buttonStyle: {
      width: 150,
      height: 40,
      backgroundColor: "blue",
      borderRadius: 10,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
  },
  textStyle: {
      fontSize: 14,
      fontWeight: '500',
      color: "white",
  },
  priceButtonWrapper: {
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
   
  }
  
  });