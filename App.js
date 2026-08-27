import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style='light'/>


      <Text style={styles.title}>Me deixa quieto, eu não quero mexer com front-end!</Text>

      <View style={styles.main}>
        <Image 
          source={{ uri: "https://github.com/CaioQC.png" }} 
          style={styles.avatar}
        />
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
    fontWeight: "bold",
    color: "#fff"
  },
  main: {
    flex: 1, //ocupa todo o espaço disponível
    alignItems: "center",
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
