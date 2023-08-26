import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../constants/Colors';

const CustomTextButton = (props) => {
  return (
    <Pressable style={styles.btn} onPress={props.onPress}>
      <Text style={{...styles.btnText, ...props.style}}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 50,
      // backgroundColor: Colors.danger,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.default,
    }
})

export default CustomTextButton