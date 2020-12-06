import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  const handleInput = (text: string): void => {
    setEnteredGoal(text);
  };

  const addGoal = (): void => {
    const newGoals = [...goals, enteredGoal];

    setGoals(newGoals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder={"Add Goal"}
          style={styles.input}
          value={enteredGoal}
          onChangeText={handleInput}
        />
        <Button title="ADD" onPress={addGoal} />
      </View>
      <View>
        {goals &&
          goals.map((goal, index) => {
            return (
              <Text key={index} style={styles.listItem}>
                {goal}
              </Text>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50 },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    padding: 10,
    marginBottom: 10,
    height: "100%",
  },
  form: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderColor: "transparent",
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
