import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
export default function App() {
  const [code, setCode] = useState("hello");
  //const [submitted, setSubmitStatus] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Enter your verification code</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCode(value)}
      />
      <Button title="submit" onPress={() => console.log(code)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
