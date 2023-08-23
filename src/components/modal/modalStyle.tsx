import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalStyles: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  pressableStyle: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  pressableTextColor: {
    color: 'black',
  },
});

export default styles;
