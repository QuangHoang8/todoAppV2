import React from "react";
import classes from "./Header.module.css";

function Header({ addTask, content }) {
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input
        type="text"
        defaultValue=""
        value={content}
        placeholder="Add a task"
        onKeyDown={(event) => addTask(event.key, event.target.value)}
      />
    </header>
  );
}

export default Header;
