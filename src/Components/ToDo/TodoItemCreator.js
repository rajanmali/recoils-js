import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../Store/atoms";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = React.useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="input-field"
      />
      <button
        onClick={addItem}
        style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoItemCreator;
