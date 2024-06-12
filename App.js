import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LineGraph from './components/LineGraph';
import Piechart from './components/PieChart';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/govbr.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Gráficos utilizando Gifted-Charts:</Text>
      <StatusBar style="auto" />
      <LineGraph />
      <Piechart/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});