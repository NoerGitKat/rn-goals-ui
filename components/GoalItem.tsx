import React from "react";
import { Text, StyleSheet } from "react-native";
import { TGoal } from "../types";

interface IGoalItemProps {
  goalItem: {
    index: number;
    item: TGoal;
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
  };
}

const GoalItem: React.FC<IGoalItemProps> = ({ goalItem }) => {
  return <Text style={styles.listItem}>{goalItem.item.value}</Text>;
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
