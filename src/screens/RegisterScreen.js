import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors.js';
import CustomInput from '../components/CustomInput.js';
import CustomTextButton from '../components/CustomTextButton.js';
import CustomButton from '../components/CustomButton.js';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    if(fullName.length == 0) {
      Alert.alert("Renseignez votre nom et prénom svp!");
      return;
    }

    if(email.length == 0) {
      Alert.alert("Renseignez votre email svp!");
      return;
    }

    if(password.length == 0) {
      Alert.alert("Renseignez votre mot de passe svp!");
      return;
    }

    console.log(fullName, email, password);

    props.navigation.replace("Tabs");
  }

  return (
      <View style={styles.container}>        
        <Text style={styles.appName}>Création de compte</Text>

        <CustomInput 
          placeholder={"Nom & prénom"}
          onChangeText={(text) => setFullName(text)}
        />

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

        <CustomButton style={styles.loginBtn} title='Créer' onPress={handleRegistration} />
        
        <View style={styles.registerBlock}>
          <Text style={styles.noAccountText}>Vous avez déjà un compte? </Text>
          <CustomTextButton style={styles.registerBtn} title='Connectez-vous' onPress={() => props.navigation.goBack()} />
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
      fontSize: 25,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginVertical: 20,
      textAlign: 'center',
    },
    loginBtn: {
      marginTop: 20,
      minWidth: 300,
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

export default RegisterScreen
