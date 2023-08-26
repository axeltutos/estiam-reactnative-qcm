import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>History</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightred",
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default History
