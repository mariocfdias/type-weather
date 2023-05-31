import { StyleSheet, Text, View } from 'react-native';
import { Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import weatherData from './assets/data.json'
import { useEffect, useState } from 'react';

interface WeatherInfo {
  state: string;
  city: string;
  date: string;
  temperature: string;
  daily_summary: string;
  wind: string;
  humidity: string;
  visibility: string;
  
}

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(
    weatherData[Math.floor(Math.random() * weatherData.length)]
  )
  useEffect(() => {
    console.log(weatherInfo)
    

  }, [weatherInfo])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cityName}>
          {weatherInfo.city}
        </Text>
        <Text style={styles.date}>
          {weatherInfo.date}
        </Text>
        <Text style={styles.wheaterStatus}>
          {weatherInfo.daily_summary.split(".")[0]}
        </Text>

      </View>
      <View style={styles.body}>
        <Text style={styles.data}>
          {weatherInfo.temperature}
        </Text>
        <Text style={styles.dailyDescriptionHeader}>
          Resumo diário</Text>
        <Text style={styles.dailyDescriptionHeader}>
          {weatherInfo.daily_summary}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Feather name="wind" size={24} color="yellow" />
          <Text style={styles.cardValue}>{weatherInfo.wind}</Text>
          <Text style={styles.cardDescription}>vento</Text>
          
        </View>
        <View style={styles.card}>
        <FontAwesome5 name="water" size={24} color="yellow" />          
        <Text style={styles.cardValue}>{weatherInfo.humidity}</Text>
          <Text style={styles.cardDescription}>humidade</Text>
          
        </View>
        <View style={styles.card}>
        <FontAwesome name="eye" size={24} color="yellow" />          
        <Text style={styles.cardValue}>{weatherInfo.visibility}</Text>
          <Text style={styles.cardDescription}>vento</Text>
          
        </View>
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
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    marginLeft: 10,
    marginTop: 16
    
  },
  card: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    

  },
  cardDescription: {
    color: "yellow",
    fontSize: 14,
    fontWeight: '200'

  },
  cardValue: {
    color: "yellow",
    fontSize: 22,
    fontWeight: "500"
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: '#010001',
    borderRadius: 15

  }
});
