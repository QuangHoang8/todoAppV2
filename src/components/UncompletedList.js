// Tô màu vàng cho dấu sao của task favourite
const addTaskFavorite = (unCompleteTasks, value) => {
  const newTasks = unCompleteTasks.map((task) => {
    if (task.time !== value) {
      return task;
    }
    if (task.favourite === false) {
      const newTask = {
        ...task,
        favourite: true,
        time: new Date().getTime(),
      };
      return newTask;
    } else {
      const newTask = { ...task, favourite: false };
      return newTask;
    }
  });

  return newTasks;
};

// Sắp xếp lại các task chưa hoàn thành
export const sortTaskFavourite = (unCompleteTasks, value) => {
  // Sắp xếp lại các task favourite
  const favouriteTask = addTaskFavorite(unCompleteTasks, value)
    .filter((task) => task.favourite === true)
    .sort((task1, task2) => {
      return task2.time - task1.time;
    });

  // Sắp xếp lại các task không favourite
  const notFavouriteTask = addTaskFavorite(unCompleteTasks, value)
    .filter((task) => task.favourite === false)
    .sort((task1, task2) => {
      return task2.time - task1.time;
    });
  return [...favouriteTask, ...notFavouriteTask];
};

export const deleteTaskComplete = (unCompleteTasks, value) => {
  // Render những công việc không được check
  const newTask = unCompleteTasks.filter((task) => task.time !== value);
  return newTask;
};

export const choseTaskUnComplete = (completeTasks, value, unCompleteTasks) => {
  // Chuyển task bỏ check nên mục chưa hoàn thành
  const newTask = completeTasks.filter((task) => task.time === value);
  return [...unCompleteTasks, ...newTask];
};
