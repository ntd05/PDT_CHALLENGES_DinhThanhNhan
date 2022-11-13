import React, { useState } from "react";
import classes from "./Selection.module.css";

function Selection(props) {
  const [valueDefault, setValueDefault] = useState("");

  const openSelection = (event) => {
    props.getValueSelected(event.target.value, props.column);
    setValueDefault(event.target.value);
  };

  const inputSearchedHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <>
      <select className={classes.select} onChange={openSelection}>
        <option value="" selected disabled hidden>
          ⋮
        </option>
        <option value="sort">Sort</option>
        <option value="search">Search</option>
        <option value="hide">Hide</option>
      </select>
      {valueDefault === "search" && <input onChange={inputSearchedHandler} />}
    </>
  );
}

export default Selection;
