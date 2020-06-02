import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../Store/selectors";

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <p>Character Count: {count}</p>;
}

export default CharacterCount;
