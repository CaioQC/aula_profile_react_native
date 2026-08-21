import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted'/>


      <Text style={styles.title}>Me deixa quieto, eu não quero mexer com front-end!</Text>

      <View style={styles.main}>
        <Image source={{ uri: "https://github.com/CaioQ.png" }} style={styles.foto}>
        </Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#202024',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    color: "#fff"
  },
  main: {
    flex: 1, //ocupa todo o espaço disponível
    width: "100%",
    backgroundColor: "#121214"
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: 148,
    borderWidth: 1,
    borderColor: "#ccc"
  }
});
