import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'   

const Exercicio1 = ({nome}) => {
  return (
    <View style={styles.container}>
      <Text>Olá, {nome}</Text>
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

export default Exercicio1