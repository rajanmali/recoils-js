import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../Store/atoms";

import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function ToDo() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className="content-container">
      <h2>To Do</h2>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <TodoListStats />
        <TodoListFilters />
      </div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default ToDo;
