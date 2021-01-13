export const choseTaskComplete = (unCompleteTasks, value, completeTasks) => {
  // Chuyển những công việc được check xuống phần hoàn thành
  const newCompleteTask = unCompleteTasks.filter((task) => task.time === value);
  return [...newCompleteTask, ...completeTasks];
};

// Bỏ check những job đã hoàn thành
export const deleteTaskUnCompleted = (completeTasks, value) => {
  // Render lại task đã được check
  const newCompleteTask = completeTasks.filter((task) => task.time !== value);
  return newCompleteTask;
};
