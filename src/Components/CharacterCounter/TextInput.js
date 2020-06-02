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
      <input type="text" value={text} onChange={handleChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
