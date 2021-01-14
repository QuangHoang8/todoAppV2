export const choseTaskComplete = (unCompleteTasks, value, completeTasks) => {
  // Chuyển những công việc được check xuống phần hoàn thành
  const newCompleteTask = unCompleteTasks.filter((task) => task.id === value);
  newCompleteTask[0].time = new Date().getTime();
  return [...completeTasks, ...newCompleteTask].sort((task1, task2) => {
    return task2.time - task1.time;
  });
};

// Bỏ check những job đã hoàn thành
export const deleteTaskUnCompleted = (completeTasks, value) => {
  // Render lại task đã được check
  const newCompleteTask = completeTasks.filter((task) => task.id !== value);
  return newCompleteTask;
};
