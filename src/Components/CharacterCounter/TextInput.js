import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../Store/atoms";

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="input-field"
      />
      <br />
      <p>Echo: {text}</p>
    </div>
  );
}

export default TextInput;
