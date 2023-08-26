import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Results = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Results</Text>
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

export default Results
