import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
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
  onDelete: (goalId: string) => void;
}

const GoalItem: React.FC<IGoalItemProps> = ({ goalItem, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(goalItem.item.id)}>
      <Text style={styles.listItem}>{goalItem.item.value}</Text>
    </TouchableOpacity>
  );
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
