import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);
  const dark = false;
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={dark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleSwitch;
