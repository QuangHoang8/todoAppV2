import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";
import {
  sortTaskFavourite,
  deleteTaskComplete,
  choseTaskUnComplete,
} from "./components/UncompletedList";
import {
  choseTaskComplete,
  deleteTaskUnCompleted,
} from "./components/CompletedList";
// import { unCompleteList } from "./components/UncompleteList";

const UNCOMPLETETASKS = [
  {
    content: "Làm bài về nhà todoApp",
    favourite: false,
    time: 17338812,
  },
  {
    content: "Tìm hiểu về usememo",
    favourite: false,
    time: 17928812,
  },
  { content: "Học ReactJS", favourite: false, time: 179088812 },
  { content: "Mua bỉm", favourite: false, time: 179215812 },
];
const COMPLETETASKS = [
  { content: "Học Java", favourite: false, time: 90 },
  { content: "Học lái xe ô tô", favourite: false, time: 10 },
  { content: "Mua sữa", favourite: false, time: 80 },
  { content: "Mua nồi cơm điện", favourite: false, time: 12 },
];
function App() {
  const [completeTasks, setCompleteTasks] = useState(COMPLETETASKS);
  const [unCompleteTasks, setUnCompleteTasks] = useState(UNCOMPLETETASKS);

  const handleCompleteTask = (value) => {
    // Chuyển những công việc được check xuống phần hoàn thành
    setCompleteTasks(choseTaskComplete(unCompleteTasks, value, completeTasks));

    // Render lại những công việc không được check
    setUnCompleteTasks(deleteTaskComplete(unCompleteTasks, value));
  };

  // Đánh dấu những task yêu thích
  const handleAddTaskFavorite = (value) => {
    setUnCompleteTasks(sortTaskFavourite(unCompleteTasks, value));
  };

  // Render ra task chưa hoàn thành
  const notCompletedTaskItems = unCompleteTasks.map((task) => (
    <TaskList
      key={task.time}
      value={task.time}
      taskContent={task.content}
      favourite={task.favourite}
      onCheckCompleteTask={handleCompleteTask}
      onAddTaskFavorite={handleAddTaskFavorite}
    />
  ));

  // Đếm số lượng task chưa hoàn thành
  const notCompletedTaskQuantity = () => {
    return notCompletedTaskItems.length;
  };

  const handleMoveCompletedTask = (value) => {
    // Render lại task vẫn được check
    setCompleteTasks(deleteTaskUnCompleted(completeTasks, value));

    // Chuyển task bỏ check lên mục chưa hoàn thành
    setUnCompleteTasks(
      choseTaskUnComplete(completeTasks, value, unCompleteTasks)
    );
  };

  // Render ra task đã hoàn thành
  const completedTaskItems = completeTasks.map((task) => {
    return (
      <CompleteTask
        key={task.time}
        value={task.time}
        completeTaskContent={task.content}
        favourite={task.favourite}
        onMoveCompletedTask={handleMoveCompletedTask}
      />
    );
  });

  // Đếm số lượng task hoàn thành
  const completedTaskQuantity = () => {
    return completeTasks.length;
  };

  // Thêm task mới

  const addTask = (taskContent) => {
    const task = [
      ...unCompleteTasks,
      ...[
        { content: taskContent, favourite: false, time: new Date().getTime() },
      ],
    ].sort((task1, task2) => {
      return task2.time - task1.time;
    });
    setUnCompleteTasks(task);
  };

  return (
    <div className="App">
      <Header newTask={addTask} />
      <div className="totalComplete">
        <span>Not Completed</span>
        <span className="quantity">{notCompletedTaskQuantity()}</span>
      </div>
      <section className="listTask">
        <ul>{notCompletedTaskItems}</ul>
      </section>
      <div className="">
        <section className="">
          <div className="totalComplete">
            <span> Completed</span>
            <span className="quantity">{completedTaskQuantity()}</span>
          </div>
          <ul>{completedTaskItems}</ul>
        </section>
      </div>
    </div>
  );
}

export default App;
