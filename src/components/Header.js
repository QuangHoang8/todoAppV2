import { useState } from "react";
import classes from "./Header.module.css";

function Header({ addTask }) {
  const [jobContent, setJobContent] = useState("");
  const handleInputValue = (content) => {
    setJobContent(content);
  };
  const handleResetInput = (key) => {
    if (key === "Enter") {
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
        onKeyDown={(event) => addTask(event.key, event.target.value)}
        onChange={(event) => handleInputValue(event.target.value)}
        onKeyUp={(e) => handleResetInput(e.key)}
      />
    </header>
  );
}

export default Header;
