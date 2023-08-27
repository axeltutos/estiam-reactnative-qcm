import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors.js';
import { PieChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("screen").width;

const ResultsScreen = props => {
  const { points, questions, quiz } = props.route.params;

  const data = [
    {
      name: "Correctes",
      population: points,
      color: "#07B62D",
      legendFontColor: "#FDFBFA",
      legendFontSize: 15
    },
    {
      name: "Fausses",
      population: questions - points,
      color: "#FF2007",
      legendFontColor: "#FDFBFA",
      legendFontSize: 15
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Resultat </Text>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Quiz : {quiz}</Text>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Correctes : {points}</Text>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Fausses : {questions - points}</Text>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"10"}
        center={[5, 20]}
        absolute
      />
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
