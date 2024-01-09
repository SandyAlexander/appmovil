import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function FormDataEntryScreen({ navigation }) {
  const [formData, setFormData] = useState({
    Fruto: '',
    Serevidad: '',
    // Otros campos...
  });

  const handleSaveData = async () => {
    // Aquí puedes agregar la lógica para guardar los datos en tu base de datos
    // Por ejemplo, hacer una solicitud a tu API
    console.log('Guardando datos:', formData);
    // await tuApi.saveFormData(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Datos</Text>

      <TextInput
        placeholder="Fruto"
        value={formData.Fruto}
        onChangeText={(text) => setFormData({ ...formData, Fruto: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Serevidad"
        value={formData.Serevidad}
        onChangeText={(text) => setFormData({ ...formData, Serevidad: text })}
        style={styles.input}
      />
      {/* Otros campos del formulario... */}

      <TouchableOpacity onPress={handleSaveData} style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Hacer Predicción</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
});
