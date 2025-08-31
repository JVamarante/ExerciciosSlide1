import { View, Text, StyleSheet } from 'react-native'

const Exercicio4 = () => {
  const tecnologias = ["React Native", "Expo", "JavaScript", "TypeScript", "Node.js"]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Lista de Tecnologias:</Text>

      {tecnologias.map((tech, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.item}>• {tech}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,             
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    width: '100%',       
    marginVertical: 5,
  },
  item: {
    fontSize: 16,
  },
})

export default Exercicio4
