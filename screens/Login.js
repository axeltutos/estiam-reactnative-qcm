import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from './../constants/Colors.js';

const Login = (props) => {


  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Login</Text>
      <Button title='Go to register screen' onPress={() => props.navigation.navigate("Register")} />
      <View style={styles.registerBtnBlock}>
        <Button title='Login' onPress={() => props.navigation.navigate("Tabs")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    registerBtnBlock: {
      marginTop: 20,
    }
})

export default Login
