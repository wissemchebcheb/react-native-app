import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Insta from './assets/instagram.png';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={Insta} style={{width:50, height:50, top:10}}/>
      <Text style={styles.title}>Bien venu sur instagram</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeff6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    alignSelf:'center',
    paddingVertical:30,
    fontWeight:500,
  },
});
