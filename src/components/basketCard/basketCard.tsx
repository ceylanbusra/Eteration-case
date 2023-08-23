import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { FunctionComponent } from 'react'
import { styles } from './basketCardStyle'
import { BasketCardType } from './basketCardType'
import { useDispatch } from 'react-redux'

const BasketCard: FunctionComponent<BasketCardType> = props => {
    const dispatch = useDispatch();
    return (

        <View style={styles.container}>

            <View style={styles.namePriceWrapper}>
                <Text>{props.name}</Text>
                <Text>{props.price}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {

                        dispatch({ type: "DECREASE_QUANTITY", payload: props })
                    }}>
                    <Text style={[styles.textStyle, { color: 'white' }]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
                    onPress={() => {
                        dispatch({ type: "ADD_BASKET", payload: props })
                    }}>
                    <Text style={[styles.textStyle, { color: 'white' }]}>{props.item.quantity}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {

                        dispatch({ type: "INCREASE_QUANTITY", payload: props })
                    }}>
                    <Text style={[styles.textStyle, { color: 'white' }]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketCard