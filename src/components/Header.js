import { useState } from "react";
import classes from "./Header.module.css";

function Header({ newTask }) {
  const [jobContent, setJobContent] = useState("");
  const handleInputValue = (content) => {
    setJobContent(content);
  };
  const handleAddTask = (key, content) => {
    if (key === "Enter" && content !== "") {
      newTask(content);
      setJobContent("");
    }
  };

  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <div className={classes.guide}>
        <span>Nhập nội dung task và ấn Enter để thêm </span>
      </div>
      <input
        type="text"
        value={jobContent}
        placeholder="Add a task"
        onKeyDown={(event) => handleAddTask(event.key, event.target.value)}
        onChange={(event) => handleInputValue(event.target.value)}
      />
    </header>
  );
}

export default Header;
