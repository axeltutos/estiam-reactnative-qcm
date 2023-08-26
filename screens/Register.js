import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Register = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Register</Text>
      <Button title='Go back to login' onPress={() => props.navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    }
})

export default Register
