import { FlatList, SafeAreaView, StatusBar, Text, View, TextInput, Pressable } from 'react-native'
import { useEffect, useRef, useState } from 'react';
import Screen from "../../components/Screen/Screen"
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/actions/products';
import { useNavigation } from '@react-navigation/native';
import { RenderProductCard } from '../../components/renderProductCard/renderProductCard';
import { styles } from './homeStyle';
import SortModal from '../../components/modal/modal';


const HomePage = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const product = useSelector((state: any) => state.product.product);
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const closeModal = () => {
    setModalVisible(false);
  };


  //search functions

  const onSearch = (text: string) => {
    let tempList: any = product.filter((item: { name: string; }) => {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setProducts(tempList);
  };


  //sayfa ilk tetiklendiğinde ürünleri çeken func.
  useEffect(() => {
    dispatch(getProduct())
  }, [])


  // //product her güncellendiğinde içindekileri render eden func.
  useEffect(() => {
    setProducts(product)
  }, [product])


  function renderHeader() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={styles.renderHeaderWrapper}
        >
          <TextInput
            ref={searchRef}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => {
              setQuery(queryText);
              onSearch(queryText);
            }}
            placeholder="Search"
            style={styles.textInputStyle}
            onSubmitEditing={() => {
             null
            }}
          />
          <View style={styles.filtersWrapper}>
            <Text>Filters:</Text>
            <Pressable style={styles.filterPressableStyle} onPress={() => {
              setModalVisible(true)
            }}>
              <Text>Select Filter</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  const renderProductCard = (props: any) => {
    return (
      <RenderProductCard
        key={props.item.id}
        image={props.item.image}
        price={props.item.price}
        name={props.item.name}
        item={props.item}
        isFavorite={props.isFavorite}
        onPress={() => {
          navigation.navigate('Detail', {
            item: props.item,
          })
        }} />
    );
  };


  return (
    <Screen>
      <View style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#EBF0F0" />
        <Header title="E-Market" noBack={true} name="E-Market" />
        <View style={styles.container}>
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderHeader}
            renderItem={renderProductCard}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
          <SortModal
            visible={modalVisible}
            onClose={closeModal}
            products={products}
            setProducts={setProducts}
          />
        </View>
      </View>
    </Screen>
  )
}

export default HomePage


