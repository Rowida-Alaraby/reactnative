import React from "react";
import {StyleSheet,Text,View,Pressable,SafeAreaView} from "react-native";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1,
         alignItems: "center",
          justifyContent: "center" ,
          backgroundColor:"gray"}}
    >
      <HomeScreen />
    </SafeAreaView>
  );
}
