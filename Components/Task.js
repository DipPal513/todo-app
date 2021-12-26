import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.task}>
      <View style={styles.textLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View styles={styles.circular}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  task: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#558cf6",
    opacity: 0.4,
    borderRadius: 5,
    margin: 15,
  },
  textLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  circular: {
    // width: 12,
    // height: 12,
    // borderColor: "#558cf6",
    // borderWidth: 2,
    // borderRadius: 5,
    // backgroundColor:"red"
    width:12,
    height:12,
    borderColor:'red',
    borderWidth:5
    
  },
});
export default Task;
