  import React from 'react';
  import 'react-native-gesture-handler';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import LoginScreen from './src/UI/screens/LoginScreen';
  import HomeScreen from './src/UI/screens/HomeScreen';
  import PredictionScreen from './src/UI/screens/PredictionScreen';
  import FormDataEntryScreen from './src/UI/screens/FormDataEntryScreen';
  import recomendacionScreen from './src/UI/screens/recomendacionScreen';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bienvenido">
          <Stack.Screen name="Bienvenido" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Prediction" component={PredictionScreen} />
          <Stack.Screen name="FormDataEntry" component={FormDataEntryScreen} />
          <Stack.Screen name="recomendacion" component={recomendacionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
