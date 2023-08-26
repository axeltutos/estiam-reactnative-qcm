import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ResultsScreen from './src/screens/ResultsScreen';

import Colors from "./src/constants/Colors";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const config = {
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.default,
  };

  const renderTabIcon = ({focused, iconName}) => <FontAwesome name={iconName} size={25} color={focused ? Colors.primary : Colors.default} />;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        ...config,
        headerShown: false,
        tabBarIcon: ({focused}) => renderTabIcon({focused, iconName: "home"})
      }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{
        ...config,
        headerShown: false,
        tabBarIcon: ({focused}) => renderTabIcon({focused, iconName: "list"})
      }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}