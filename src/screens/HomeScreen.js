import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>HomeScreen</Text>
      <Button title={"Start Quiz"} onPress={() => navigation.navigate('Quiz')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.default,
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

export default HomeScreen
