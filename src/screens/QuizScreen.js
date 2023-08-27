import React, { useState, useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View, Pressable, TouchableOpacity, SafeAreaView } from 'react-native';
import Colors from '../constants/Colors.js';
import dataQuestion from '../data/dataQuestion.js';
import { AntDesign } from "@expo/vector-icons";
// 

const QuizScreen = ({ navigation }) => {

  const totalQuestion = dataQuestion.length;

  // score 
  const [score, setScore] = useState(0);

  // index de la question
  const [questionIndex, setQuestionIndex] = useState(0);

  // answerStatus ( true, false)
  const [answerStatus, setAnswerStatus] = useState(null)

  // answerStatus ( true, false)
  const [answer, setAnswer] = useState([])

  // answer selected 
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)


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
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [currentQuestion])


  useEffect(() => {
    if (questionIndex + 1 > totalQuestion) {
      navigation.navigate("Results", {
        answers: answer,
        points: score,
        quiz: quiz
      })
    }
  }, [currentQuestion]);


  const currentQuestion = dataQuestion[questionIndex]

  const renderItemReponse = ({ item }) => {

    return (
      <Pressable
        onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(item.id)}
        style={
          selectedAnswerIndex === item.id &&
            item.id === currentQuestion.correct ?
            styles.itemReponseValide :
            selectedAnswerIndex != null &&
              selectedAnswerIndex === item.id ?
              styles.itemReponseInValide :
              styles.itemReponse
        }
      >
        {selectedAnswerIndex === item.id && item.id === currentQuestion?.correct ?
          (<AntDesign style={styles.responseNumber} name="checkcircle" size={20} color="white" />) :
          selectedAnswerIndex != null && selectedAnswerIndex === item.id ?
            (<AntDesign style={styles.responseNumber} name="closecircle" size={20} color="white" />) :
            (<Text style={styles.responseNumber}
            >{item.id} </Text>)
        }

        <Text style={{
          marginLeft: 10,
          paddingRight: 40,
          fontSize: 18,
          color: (selectedAnswerIndex === item.id && item.id === currentQuestion?.correct) || (selectedAnswerIndex != null && selectedAnswerIndex === item.id)
            ? Colors.white : Colors.primary

        }}
        >
          {item.rep}
        </Text>
      </Pressable>
    )
  }

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }

  const results = () => {
    navigation.navigate("Results", {
      /* answers: answer, */
      points: score,
      questions: totalQuestion,
      quiz: "quiz"
    });
  }
  return (
    <SafeAreaView style={styles.questionContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, margin: 15 }}>
        <Text style={{ color: Colors.primary }}> {questionIndex + 1} / {totalQuestion}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: Colors.primary }}>Quitter</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 12, color: Colors.primary }}>{currentQuestion?.question}</Text>
        <FlatList
          key={'#'}
          keyExtractor={(reponse) => reponse.id}
          data={currentQuestion.reponses}
          renderItem={renderItemReponse}
          horizontal={false}
        />
      </View>
      {
        questionIndex + 1 >= totalQuestion ?
          (<Pressable
            onPress={results}
            style={
              answerStatus === null ? null :
                {
                  marginTop: 45,
                  marginHorizontal: 20,
                  backgroundColor: Colors.primary,
                  padding: 10,
                  borderRadius: 20,
                }}>
            {answerStatus === null ? null :
              (<Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold", color: Colors.white, }}> Reponse </Text>)
            }
          </Pressable>) : answerStatus === null ? null :
            (<Pressable onPress={nextQuestion}
              style={answerStatus === null ? null : {
                marginTop: 45,
                marginHorizontal: 20,
                backgroundColor: Colors.primary,
                padding: 10,
                borderRadius: 20,
              }}>
              {answerStatus === null ? null :
                (<Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold", color: Colors.white, }}> Question Suivante </Text>)
              }
            </Pressable>)
      }
    </SafeAreaView>

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
    flex: 1,
    backgroundColor: Colors.white,
    padding: 45,
  },
  itemReponse: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.primary,
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  itemReponseValide: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.primary,
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "green"
  },
  itemReponseInValide: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.primary,
    marginVertical: 15,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "red",
  },
  responseNumber: {
    textAlign: "center",
    width: 40,
    height: 40,
    paddingTop: 5,
    fontSize: 28,
  },
})

export default QuizScreen


/*  <View style={styles.container}>
      <Text style={styles.containerText}>QuizScreen</Text>
      <Button title={"See results"} onPress={() => navigation.navigate("Results")} />
    </View> */