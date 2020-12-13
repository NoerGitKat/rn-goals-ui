import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import useGoals from "../hooks/useGoals";
import { TGoal } from "../types";

interface IGoalFormProps {
  addGoal: (newGoal: TGoal) => void;
}

const GoalForm: React.FC<IGoalFormProps> = ({ addGoal }) => {
  const { enteredGoal, setEnteredGoal } = useGoals();

  const handleInput = (text: string): void => {
    setEnteredGoal({ id: Math.random().toString(), value: text });
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder={"Add Goal"}
        style={styles.input}
        value={enteredGoal.value}
        onChangeText={handleInput}
      />
      <Button title="ADD" onPress={addGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalForm;
