import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cityName}>
          Fortaleza - CE
        </Text>
        <Text style={styles.date}>
          terça-feira, 20 de maio
        </Text>
        <Text style={styles.wheaterStatus}>
          ensolarado
        </Text>

      </View>
      <View style={styles.body}>
        <Text style={styles.data}>
          31ºC
        </Text>
        <Text style={styles.dailyDescriptionHeader}>
          Resumo diário</Text>
        <Text style={styles.dailyDescriptionHeader}>
          Agora, sensação térmica de +34º.
          Possíveis pancadas de chuva ao final do dia.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.card}>
          <Feather name="wind" size={24} color="black" />
          <Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F93B',


  },
  footer: {
    flex: 1,
    width: 200

  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  cityName: {
    fontWeight: "bold",
    fontSize: 24
  },
  date: {
    color: "#FAFAFA",
    borderRadius: 50,
    backgroundColor: "#030006",
    padding: 16,
    fontSize: 20,

  },
  wheaterStatus: {
    fontWeight: "bold",
    fontSize: 16
  },
  data: {
    fontSize: 120,
    fontWeight: "bold"
  },
  dailyDescription: {
    fontWeight: "bold",
    fontSize: 24,
  },
  dailyDescriptionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  card: {
    backgroundColor: '#010001',
  },
  cardDescription: {}
});
