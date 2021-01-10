import React from "react";
import { StarFilled } from "@ant-design/icons";
import classes from "./TaskList.module.css";
function TaskList({
  value,
  taskContent,
  onCheckCompleteTask,
  colorStar,
  onAddTaskFavorite,
}) {
  return (
    <li>
      <div className={classes.wrapItem}>
        <div className={classes.wrapItemCheckboxAndLabel}>
          <input
            className={classes.wrapItemCheckbox}
            type="checkbox"
            value={value}
            onChange={() => onCheckCompleteTask(value)}
          />
          <label className={classes.wrapItemLabel}>{taskContent}</label>
        </div>
        <StarFilled
          style={{ color: colorStar, outline: "none" }}
          onClick={() => onAddTaskFavorite(value)}
        />
      </div>
    </li>
  );
}

export default TaskList;
