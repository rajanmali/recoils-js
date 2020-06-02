import React from "react";
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";

function CharacterCounter() {
  return (
    <div className="content-container">
      <h2>Character Counter</h2>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
