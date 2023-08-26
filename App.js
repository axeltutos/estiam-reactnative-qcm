import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import History from './screens/History';
import Results from './screens/Results';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({focused}) => <FontAwesome name='home' size={25} color={focused ? "purple" : "grey"} />
      }} />
      <Tab.Screen name="History" component={History} options={{
        headerShown: false,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({focused}) => <FontAwesome name='list' size={25} color={focused ? "purple" : "grey"} />
      }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tabs" component={Tabs} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}