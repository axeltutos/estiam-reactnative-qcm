import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors.js';
import CustomInput from '../components/CustomInput.js';
import CustomTextButton from '../components/CustomTextButton.js';
import CustomButton from '../components/CustomButton.js';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>        
        <Text style={styles.appName}>Création de compte</Text>

        <CustomInput 
          placeholder={"Nom"}
        />

        <CustomInput 
          placeholder={"Prénoms"}
        />

        <CustomInput 
          placeholder={"Mot de passe"} 
          secureTextEntry />

        <CustomButton style={styles.loginBtn} title='Créer' onPress={() => props.navigation.navigate("Tabs")} />
        
        <View style={styles.registerBlock}>
          <Text style={styles.noAccountText}>Vous avez déjà un compte? </Text>
          <CustomTextButton style={styles.registerBtn} title='Connectez-vous' onPress={() => props.navigation.goBack()} />
        </View>
        
        <StatusBar style='light' />
      </View>
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
