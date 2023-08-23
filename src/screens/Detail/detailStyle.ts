import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf:'center'
    },
    container: {
        flex: 1,
    },
    name: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black',
        marginBottom: 8,
        alignSelf:'center'
    },
    description: {
        fontSize: 14,
        color: 'black',
        textAlign: "justify"
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
        justifyContent:'space-between',
        alignItems: 'center',
    }
})