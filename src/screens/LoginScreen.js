import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import Colors from '../constants/Colors.js';
import CustomInput from '../components/CustomInput.js';
import CustomButton from '../components/CustomButton.js';
import CustomTextButton from '../components/CustomTextButton.js';
import { StatusBar } from 'expo-status-bar';

const WINDOW = Dimensions.get("window");

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(email.length == 0) {
      Alert.alert("Renseignez votre email svp!");
      return;
    }

    if(password.length == 0) {
      Alert.alert("Renseignez votre mot de passe svp!");
      return;
    }

    console.log(email, password);

    props.navigation.replace("Tabs")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.appLogo} source={require("../assets/quiz-logo-1.png")} />
      
      <Text style={styles.appName}>Estiam quiz</Text>

      <CustomInput 
        placeholder={"Email"}
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
      />
      <CustomInput 
        placeholder={"Mot de passe"} 
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <CustomButton style={styles.loginBtn} title='Connexion' onPress={handleLogin} />
      

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
      width: "80%",
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
