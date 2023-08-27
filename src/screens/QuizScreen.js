import React, { useState, useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors.js';
import dataQuestion from '../data/dataQuestion.js';
import { AntDesign } from '@expo/vector-icons';
// 

const QuizScreen = ({ navigation }) => {

  const totalQuestion = dataQuestion.length;

  // score 
  const [score, setScore] = useState(0);

  // index de la question
  const [questionIndex, setQuestionIndex] = useState(0);

  // answerStatus ( true, false)
  const [answerStatus, setAnswerStatus] = useState(null)

  // answers  ( true, false)
  const [answer, setAnswer] = useState([])

  // answer selected 
  const [selectedAnswerIndex, setselectedAnswerIndex] = useState(null)

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correct) {
        setScore((score) => score + 1);
        setAnswerStatus(true);
        answer.push({ question: questionIndex + 1, answer: true })
      } else {
        setAnswerStatus(false);
        answer.push({ question: questionIndex + 1, answer: false })
      }
    }
  }, [selectedAnswerIndex])

  useEffect(() => {
    setselectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [currentQuestion])

  const currentQuestion = dataQuestion[questionIndex]

  const renderItemReponse = ({ item }) => {

    return (
      <Pressable
        onPress={() => selectedAnswerIndex === null && setselectedAnswerIndex(item.id)}
        style={
          selectedAnswerIndex === questionIndex &&
            questionIndex === currentQuestion.correct ?
            styles.itemReponseValide :
            selectedAnswerIndex != null &&
              selectedAnswerIndex === questionIndex ?
              styles.itemReponseInValide :
              styles.itemReponse
        }
      >
        {selectedAnswerIndex === questionIndex && questionIndex === currentQuestion?.correct ?
          (<AntDesign style={styles.responseNumber} name="checkcircle" size={24} color="green" />) :
          selectedAnswerIndex != null && selectedAnswerIndex === questionIndex ?
            (<AntDesign name="closecircle" size={24} color="red" />) :
            (<Text style={styles.responseNumber}>{item.id} </Text>)
        }

        <Text style={{ marginLeft: 10, paddingRight: 40 }}>{item.rep}</Text>
      </Pressable>
    )
  }

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
        <Text> {questionIndex} / {totalQuestion}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Quitter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.questionContainer}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 12 }}>{currentQuestion?.question}</Text>
        <FlatList
          key={'#'}
          keyExtractor={(reponse) => reponse.id}
          data={currentQuestion.reponses}
          renderItem={renderItemReponse}
        />
      </View>
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
  },
  questionContainer: {
    marginTop: 10,
    backgroundColor: "#F0F8FF",
    padding: 10,
    borderRadius: 6,
  },
  itemReponse: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20
  },
  itemReponseValide: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "green"
  },
  itemReponseInValide: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "red"
  },
  responseNumber: {
    borderColor: "grey",
    textAlign: "center",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 20,
    padding: 15,
  },
})

export default QuizScreen


/*  <View style={styles.container}>
      <Text style={styles.containerText}>QuizScreen</Text>
      <Button title={"See results"} onPress={() => navigation.navigate("Results")} />
    </View> */