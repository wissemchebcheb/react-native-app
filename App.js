import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
 
} from "react-native";
import TaskExpen from "./Components/Task"
export default function App() {
  const [state, setstate] = useState("");

  const onChangeText = (text) => {
    setstate(text);
  };
  return (
    <View style={styles.container}>
      {/* title */}
      <View style={styles.TileBox}>
        <Text>Today's Task</Text>
      </View>

      {/* body tasks */}

      {/* Task Component */}
      <View style={styles.BoxCard}>
        <View style={styles.Item}>
          <View style={styles.Icon1}></View>
          <View style={styles.TextBox}>
            <TaskExpen />
          </View>
        </View>

        <View style={styles.Icon2}></View>
      </View>

      {/* Footer input + button */}

      <View style={styles.Footer}>
        <View style={styles.InputBox}>
          <TextInput
            style={styles.Input}
            value={state}
            onChangeText={(text) => {
              onChangeText(text);
            }}
          />
        </View>
        <View style={styles.BuutonBox}>
          <TouchableOpacity style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
  },
  TileBox: {
    height: 40,
    marginTop: 30,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
  },
  BoxCard: {
    width: "95%",
    height: 30,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: "space-between",
  },
  Icon1: {
    width: 30,
    height: 30,
    backgroundColor: "blue",
    // marginRight:15
  },
  Icon2: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: "#f11",
  },
  Item: {
    // backgroundColor:"#0006",
    flexDirection: "row",
    alignItems: "center",
  },
  TextBox: {
    marginLeft: 15,
  },
  Footer: {
    backgroundColor: "#ddd",
    height: 60,
    width: "95%",
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InputBox: {
    height: "100%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  BuutonBox: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  Input: {
    backgroundColor: "#fff",
    width: "95%",
    height: 50,
    borderRadius: 25,
    paddingLeft: 15,
  },
});

