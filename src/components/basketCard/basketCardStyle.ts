import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/globalStyle';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    namePriceWrapper: {
        flexDirection: 'column'
    },
    buttonWrapper: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-around',


    },
    buttonStyle: {
        padding: 15,
        backgroundColor: COLORS.secondGray
    },
    textStyle: {
        color: COLORS.gray
    }

})