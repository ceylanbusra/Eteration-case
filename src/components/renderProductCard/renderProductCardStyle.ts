import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    productWrapper: {
        width: 170,
        paddingHorizontal: 15,
         shadowColor: "black",
         borderColor:"blue",
        marginVertical: 15,
        margin:4,
        elevation:0.5,
        padding:4
      },
      imageStyle: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
      },
      amountStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: "blue",
        marginTop: 15,
      },
      productNameStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: "black",
        marginTop: 15,
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
      iconWrapper:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
      }

})