import React from "react";
import {
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

  const addGoal = (newGoal: TGoal): void => {
    const newGoals = [...goals, newGoal];

    setGoals(newGoals);
  };

  const deleteGoal = (event: GestureResponderEvent): void => {
    // const filteredGoals = goals.filter((goal) => goal.id !== );
    // setGoals(filteredGoals);
  };

  return (
    <View style={styles.container}>
      <GoalForm addGoal={addGoal} />
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
  container: { padding: 50 },
});
