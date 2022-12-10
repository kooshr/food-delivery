import { StyleSheet, Button, View, Text, Pressable } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { db } from "./firebase.js";
import Login from "./Screens/Login.js";
import Home from "./Screens/Home.js";
import SignUp from "./Screens/SignUp.js";

const Stack = createStackNavigator();
export default function App() {
  const test = async (x) => {
    console.log(x);
    await setDoc(doc(db, "charachters", "mario"), {
      employment: "rithwik sad",
      outfit: "red",
    });
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start rathik ? your apip!</Text>
    //   <StatusBar style="auto" />
    //   <Button
    //     onPress={() => test(8)}
    //     title="Learn More"
    //     color="#841584"
    //     accessibilityLabel="Learn more about this purple button"
    //   />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
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
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
