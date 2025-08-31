import { View, Text, Button } from 'react-native'
import { useState } from 'react' 
import { StyleSheet } from 'react-native'

const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

        function incrementar() {
          setContador(contador + 1)
        }
        function decrementar() {
          setContador(contador - 1)
        }

  return (
    <View style={styles.container}>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
      <Text>O Contador está em: {contador}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Exercicio2