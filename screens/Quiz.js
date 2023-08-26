import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Quiz</Text>
      <Button title={"See results"} onPress={() => navigation.navigate("Results")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    }
})

export default Quiz
