import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskExpen = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.Text}>exmple</Text>
      <Text>exmple</Text>
    </View>
  );
};



export default TaskExpen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#55BCF6",
    alignItems: "center",
    flexDirection:'row',
  },
  Text:{
    marginRight:5

  }
});
