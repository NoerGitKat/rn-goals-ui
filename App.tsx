import React, { useState } from "react";
import {
  Button,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  View,
} from "react-native";
import GoalForm from "./components/GoalForm";
import GoalItem from "./components/GoalItem";
import useGoals from "./hooks/useGoals";
import { TGoal } from "./types";

export default function App() {
  const { goals, setGoals } = useGoals();
  const [modalOpened, setModalOpened] = useState(false);

  const addGoal = (newGoal: TGoal): void => {
    const newGoals = [...goals, newGoal];

    setGoals(newGoals);
  };

  const deleteGoal = (goalId: string): void => {
    const filteredGoals = goals.filter((goal) => goal.id !== goalId);
    setGoals(filteredGoals);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setModalOpened(true)} />
      <GoalForm addGoal={addGoal} modalOpened={modalOpened} />
      {goals && (
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={(data) => (
            <GoalItem goalItem={data} onDelete={deleteGoal} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
