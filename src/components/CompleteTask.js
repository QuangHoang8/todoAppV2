import React from "react";
import { StarFilled } from "@ant-design/icons";
import classes from "./CompleteTask.module.css";
function CompleteTask({
  completeTaskContent,
  value,
  favourite,
  onMoveCompletedTask,
}) {
  return (
    <li>
      <div className={classes.wrapItem}>
        <div className={classes.wrapItemCheckboxAndLabel}>
          <input
            className={classes.wrapItemCheckbox}
            type="checkbox"
            value={value}
            defaultChecked
            onChange={() => onMoveCompletedTask(value)}
          />
          <label className={classes.wrapItemLabel}>{completeTaskContent}</label>
        </div>
        <div>
          <StarFilled style={{ color: favourite ? "yellow" : "gray" }} />
        </div>
      </div>
    </li>
  );
}

export default CompleteTask;
