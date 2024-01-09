import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PredictionScreen() {
  const navigation = useNavigation();

  const handlePrediction = async () => {
    // Aquí agregamos la lógica para navegar al formulario
    navigation.navigate('FormDataEntry'); // Usando navigate directamente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Para realiazar la Predicción ingrese los siguientes datos</Text>

      <TouchableOpacity onPress={handlePrediction} style={styles.button}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>

      {/* Otras partes del código... */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Otros estilos...
});
