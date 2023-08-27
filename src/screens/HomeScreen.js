import React from 'react'
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors.js';
import { AntDesign } from '@expo/vector-icons';

const WINDOW = Dimensions.get("window");

const SQL_IMG = "https://img.freepik.com/free-vector/programmer-working-with-sql_52683-22997.jpg?w=1060&t=st=1693100890~exp=1693101490~hmac=e73c2a5671fe51910bb191c41bb1acce986d5e11230f4ac60f0a58cebb6a594c";
const HTML = "https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?w=1060&t=st=1693102993~exp=1693103593~hmac=d138d1b1a1ee1a5a8c633bae0f0b4340db23c1d053b398855bd56bf3af88bbde";
const REACT = "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-illustration_335657-5140.jpg?w=1060&t=st=1693103087~exp=1693103687~hmac=2581270968cf34941688f241a9c88e9d2582dc9784dbbe6f1c3058e48669ad46";
const REACT_NATIVE = "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?w=1060&t=st=1693103055~exp=1693103655~hmac=1b90c51a93670b480ffc70f51fdfdf4e3783e25fe6d43401dfdca12e6b1efaf5";

const HomeScreen = ({navigation}) => {
  const quizList = [
    { id: 1, title: "Débutant php & Mysql", questions: [], image: SQL_IMG},
    { id: 2, title: "Les bases de React", questions: [], image: REACT},
    { id: 3, title: "React Native intermediaire", questions: [], image: REACT_NATIVE},
    { id: 4, title: "Initiation à Docker", questions: [], image: SQL_IMG},
    { id: 5, title: "HTML/CSS, les bases", questions: [], image: HTML},
    { id: 6, title: "Angular pour les nuls", questions: [], image: SQL_IMG},
  ];

  const startQuiz = (quiz) => {
    console.log(quiz.title);

    navigation.navigate('Quiz');
  }

  const logout = () => {
    console.log("Déconnexion");

    Alert.alert(
      'Déconnexion', 
      "Êtes-vous sûr de vouloir vous déconnecter?",
      [
        {
          text: "Non",
          onPress: () => {
            console.log("Non");
          }
        },
        {
          text: "Oui",
          onPress: () => {
            navigation.replace('Login');
          }
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageHeaderBlock}>
        <Text style={styles.pageTitle}>Home</Text>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={ logout }
        >
          <AntDesign name={'logout'} size={22} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitleBlock}>
        <Text style={styles.sectionTitleText}>Hello <Text style={styles.sectionUserName}>Jack</Text></Text>
        <Text style={styles.sectionQuestion}>
          Quel qcm voudrais-tu passer aujourd'hui?
        </Text>
      </View>

      <View style={styles.quizList}>
        {
          quizList.map(quiz => (
            <TouchableOpacity 
              key={quiz.id} 
              activeOpacity={0.6} 
              onPress={() => startQuiz(quiz)}
            >
              <View style={styles.quizCard}>
                <Image style={styles.quizImg} source={{ uri: quiz.image}} />
                <View style={styles.quizDetails}>
                  <Text style={styles.quizTitle}>{quiz.title}</Text>
                  <Text style={styles.quizTotalQuestions}>{quiz.questions.length + ' questions'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.default,
      paddingHorizontal: 15,
      paddingTop: 30,
    },
    pageHeaderBlock: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 50,
      marginTop: 10,
    },
    pageTitle: {
      fontSize: 30,
      fontWeight: 900,
      color: Colors.secondary
    },
    sectionTitleBlock: {
      marginVertical: 25,
    },
    sectionTitleText: {
      fontSize: 25,
      fontWeight: 900,
      color: Colors.white,
    },
    sectionUserName: {
    },
    sectionQuestion: {
      fontSize: 18,
      color: Colors.secondary
    },
    quizList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    quizCard: {
      backgroundColor: Colors.white,
      width: WINDOW.width / 2.5,
      height: 220,
      borderRadius: 10,
      marginVertical: 15,
      shadowColor: Colors.dark,
      shadowOpacity: 0.4,
      shadowRadius: 15,
    },
    quizImg: {
      width: "100%",
      height: 125,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    quizDetails: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      backgroundColor: Colors.secondary,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    quizTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.white,
    },
    quizTotalQuestions: {
      color: Colors.default,
      fontWeight: 700,
    }
})

export default HomeScreen
