import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';


const QuizScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>QuizScreen</Text>
      <Button title={"See results"} onPress={() => navigation.navigate("Results")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.info,
        alignItems: "center",
        justifyContent: "center"
    },
    containerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        color: Colors.white,
    }
})

export default QuizScreen
