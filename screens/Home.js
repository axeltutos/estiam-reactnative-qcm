import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Home</Text>
      <Button title={"Start Quiz"} onPress={() => navigation.navigate('Quiz')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
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

export default Home
