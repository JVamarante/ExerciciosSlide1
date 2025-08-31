import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'

const Exercicio3 = () => {
  const [texto, setTexto] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite algo abaixo:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escreva aqui..."
        value={texto}
        onChangeText={setTexto}
      />

      <Text style={styles.resultado}>Você digitou: {texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  resultado: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Exercicio3
