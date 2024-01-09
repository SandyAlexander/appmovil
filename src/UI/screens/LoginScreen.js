// LoginScreen.js
import logo from '../../../assets/images/logo.png';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, Animated, Alert, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    // Simulación de inicio de sesión con usuario y contraseña estáticos (admin-admin)
    if (emailOrNumber === 'Admin' && password === 'Admin') {
      setAuthenticated(true);
      navigation.navigate('Home');
    } else {
      Alert.alert('Algo salio mal', 'Porfavor verifica tus credenciales . Inténtalo de nuevo.');
    }
  };

 

  return (
    <Animated.View style={[styles.container, { opacity: animatedOpacity }]}>
      <Image source={logo} style={styles.backgroundImage} resizeMode="cover" />

      <View style={styles.overlay}>
        <Animated.Text style={[styles.appName, { opacity: animatedOpacity }]}>AgricApp</Animated.Text>
        <Animated.Text style={[styles.title, { opacity: animatedOpacity }]}>¡Descubre la Agricultura del Futuro!</Animated.Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo o Número"
            placeholderTextColor="#555"
            value={emailOrNumber}
            onChangeText={(text) => setEmailOrNumber(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#555"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: windowWidth,
    height: windowHeight,
    opacity: 0.7,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2ecc71',
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#3498db',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    color: '#333',
    backgroundColor: '#ecf0f1',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
