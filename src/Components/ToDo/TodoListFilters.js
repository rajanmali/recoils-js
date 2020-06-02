import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../Store/atoms";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      <span style={{ marginRight: "1rem" }}>Filter:</span>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoListFilters;
