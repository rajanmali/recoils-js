import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../Store/selectors";

function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div style={{ display: "flex", flexFlow: "column wrap" }}>
      <h4 style={{ margin: "0" }}>Stats</h4>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
}

export default TodoListStats;
