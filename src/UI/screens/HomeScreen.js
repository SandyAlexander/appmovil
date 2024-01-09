// HomeScreen.js
import logo from '../../../assets/images/logo.png';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePrediction = () => {
    console.log('Haciendo predicción...');
    navigation.navigate('Prediction');
    // Agrega la lógica para ir a la pantalla de predicción
  };

  const handleHistory = () => {
    console.log('Mostrando historial...');
    // Agrega la lógica para ir a la pantalla de historial
  };

  return (
    <ImageBackground
      source={logo}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.appName}>AgricApp</Text>
          <Text style={styles.title}>Bienvenido aqui podras hacer tus predicciones o ver tu historial</Text>

          <TouchableOpacity style={styles.primaryButton} onPress={handlePrediction}>
            <Text style={styles.buttonText}>Hacer Predicción</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleHistory}>
            <Text style={styles.buttonText}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2ecc71', // Azul brillante
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#00FFCB', // Verde esmeralda
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#00FFCB', // Rojo coral
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
