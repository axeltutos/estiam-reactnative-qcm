import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Colors from '../constants/Colors.js';

const data = [
  {
    id: 1,
    quiz: 'ReactJS',
    correctes: 15,
    fausses: 5
  },
  {
    id: 2,
    quiz: 'JavaScript',
    correctes: 16,
    fausses: 7
  },
  {
    id: 3,
    quiz: 'Angular',
    correctes: 8,
    fausses: 3
  },
  {
    id: 4,
    quiz: 'React-Native',
    correctes: 13,
    fausses: 8
  },
  {
    id: 5,
    quiz: 'Flutter',
    correctes: 23,
    fausses: 20
  }
]

const HistoryScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{
        backgroundColor: 'lightgrey',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5, backgroundColor: generateColor()
      }} >
        <Text style={styles.title}> Quiz : {item.quiz}</Text>
        <Text style={styles.title}> Correctes : {item.correctes}</Text>
        <Text style={styles.title}> Fausses : {item.fausses}</Text>
      </View>
    )
  }

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <View>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <Text style={styles.titleHistory}> Historique </Text>
        <FlatList
          key={'#'}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
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
  },
  titleHistory: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "lightred",
    alignItems: "center",
    justifyContent: "center"
  },
  containerText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: 20,
    color: "white"
  },

})

export default HistoryScreen
