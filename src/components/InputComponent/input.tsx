import { View, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Input = (props:any) => {
    const dispatch = useDispatch();
    const searchRef = useRef();
    const product = useSelector((state: any) => state.product.product);
    const [products, setProducts] = useState([]);


    const onSearch = (text: string) => {
        let tempList: any = product.filter((item: { name: string; }) => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        setProducts(tempList);
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: tempList })
    };

    return (
        <View>
            <TextInput
                ref={searchRef}
                autoCapitalize="none"
                autoCorrect={false}
                value={props.query}
                onChangeText={props.onChangeText}
                placeholder="Search"
                style={{ backgroundColor: '#fff', paddingHorizontal: 20, marginBottom: 10 }}
            />
        </View>
    )
}

export default Input