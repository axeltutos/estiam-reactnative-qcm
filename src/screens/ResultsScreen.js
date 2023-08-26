import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';


const ResultsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>ResultsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
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

export default ResultsScreen
