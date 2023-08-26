import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';


const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>HistoryScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.danger,
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white,
    }
})

export default HistoryScreen
