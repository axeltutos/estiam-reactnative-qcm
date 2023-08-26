import React from 'react'
import { Button, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../constants/Colors.js';
import CustomInput from '../components/CustomInput.js';
import CustomButton from '../components/CustomButton.js';
import CustomTextButton from '../components/CustomTextButton.js';
import { StatusBar } from 'expo-status-bar';

const WINDOW = Dimensions.get("window");

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.appLogo} source={require("../assets/quiz-logo-1.png")} />
      
      <Text style={styles.appName}>Estiam quiz</Text>

      <CustomInput 
        placeholder={"Email"}
        keyboardType='email-address'
      />
      <CustomInput 
        placeholder={"Mot de passe"} 
        secureTextEntry />

      <CustomButton style={styles.loginBtn} title='Connexion' onPress={() => props.navigation.navigate("Tabs")} />
      

      <View style={styles.registerBlock}>
        <Text style={styles.noAccountText}>Vous n'avez pas de compte? </Text>
        <CustomTextButton style={styles.registerBtn} title='Créer un compte' onPress={() => props.navigation.navigate("Register")} />
      </View>
      
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    appName: {
      color: Colors.white,
      fontSize: 35,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginVertical: 20,
    },
    appLogo: {
      width: '100%',
      height: WINDOW.height / 6,
      resizeMode: 'contain'
    },
    loginBtn: {
      marginTop: 20,
    },
    registerBlock: {
      width: "70%",
      flexDirection: 'row',
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 50,
    },
    noAccountText: {
      color: Colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
    registerBtn: {
      paddingHorizontal: 10,
    }
})

export default LoginScreen
