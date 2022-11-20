import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";
import React from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home.js'

const Stack = createStackNavigator();

export default function App() {
  
  const test = async (x) => {
    console.log(x);
    await setDoc(doc(db, "codes", "user1"), {
      employment: "Code1",
      outfit: "890OLF13",
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
