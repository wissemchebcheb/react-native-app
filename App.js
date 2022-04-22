import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Insta from './assets/instagram.png';
import TodoList from './src/TodoList';


export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Image source={Insta} style={{width:50, height:50, top:10}}/> */}
      {/* <Text style={styles.title}>Bien venu sur instagram</Text> */}

      <TodoList />
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
    fontWeight:'500', // fontWeight:'500'
  },
});
