import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';

const CustomInput = (props) => {
  return (
    <TextInput {...props} style={styles.textInput} />
  )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Colors.white,
        width: '100%',
        minWidth: 300,
        height: 50,
        marginVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        color: Colors.default,
        fontSize: 18,
    }
});

export default CustomInput
