import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';

const LoginScreen = (props) => {


  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>LoginScreen</Text>
      <Button title='Go to register screen' onPress={() => props.navigation.navigate("Register")} />
      <View style={styles.registerBtnBlock}>
        <Button title='LoginScreen' onPress={() => props.navigation.navigate("Tabs")} />
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
        color: Colors.white,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    registerBtnBlock: {
      marginTop: 20,
    }
})

export default LoginScreen
