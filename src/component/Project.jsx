import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material"; 
import "./toggle.css";
import Second from "./second/Second";
import First from "./first/First";

function Project() {
  const [apicall, setApiCall] = useState("first"); 

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setApiCall(newAlignment);
    }
  };
  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={apicall}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="first">Books</ToggleButton>
        <ToggleButton value="second">Products</ToggleButton>
      </ToggleButtonGroup>
      <div className="component-display">
        {apicall === "first" ? <First /> : <Second />}
      </div>
    </div>
  );
}

export default Project;
