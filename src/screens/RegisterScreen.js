import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors.js';

const RegisterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>RegisterScreen</Text>
      <Button title='Go back to login' onPress={() => props.navigation.goBack()} />
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
    }
})

export default RegisterScreen
