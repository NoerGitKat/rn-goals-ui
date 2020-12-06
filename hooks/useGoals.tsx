import { useState } from "react";
import { TGoal } from "../types";

const useGoals = () => {
  const [enteredGoal, setEnteredGoal] = useState({ id: "", value: "" });
  const [goals, setGoals] = useState<TGoal[]>([]);

  return { enteredGoal, setEnteredGoal, goals, setGoals };
};

export default useGoals;
