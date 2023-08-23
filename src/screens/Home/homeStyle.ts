import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/globalStyle";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
    },
    mainContainer:{
       flex: 1, width: "100%" 
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
    modalContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,.5)'
    },
    modalStyles:{
      width: '80%',
      backgroundColor: COLORS.mainColor
    },
    pressableStyle:{
      width: '100%',
      height: 50,
      borderBottomWidth: 0.5,
      justifyContent: 'center',
      paddingLeft: 20
    },
    pressableTextColor:{ fontSize: 18, color: '#000' },
    renderHeaderWrapper:{
            marginVertical: 10
          
    },
    textInputStyle:{ backgroundColor: '#fff', paddingHorizontal: 20, marginBottom: 10 },
    filtersWrapper:{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
    filterPressableStyle:{ backgroundColor: COLORS.lightBlue,padding:10 }
  
  });