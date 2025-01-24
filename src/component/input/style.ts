import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      marginTop: 5,
    },

  });