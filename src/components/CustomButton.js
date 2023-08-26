import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from './../constants/Colors';

const CustomButton = (props) => {
  return (
    <Pressable style={{...styles.btn, ...props.style}} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: 50,
      borderRadius: 50,
      backgroundColor: Colors.default
    },
    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default CustomButton