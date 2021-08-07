import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((val) => val + 1);
  const decrement = () => setCounter((val) => val - 1);
  const reset = () => setCounter((val) => val*0)

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={increment}>
        <Text style={styles.text}>{"+"}</Text>
      </Pressable>
      <Text style={styles.counter}>{counter}</Text>
      <Pressable style={styles.button} onPress={decrement}>
        <Text style={styles.text}>{"-"}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={reset}>
        <Text style={styles.text}>{"Reset"}</Text>
      </Pressable>
    </View>
  );
}

export { Counter };
