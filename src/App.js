import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";
const UNCOMPLETETASKS = [
  {
    content: "Làm bài về nhà todoApp",
    color: "gray",
    time: 17338812,
  },
  {
    content: "Tìm hiểu về usememo",
    color: "gray",
    time: 17928812,
  },
  { content: "Học ReactJS", color: "gray", time: 179088812 },
  { content: "Mua bỉm", color: "gray", time: 179215812 },
];
const COMPLETETASKS = [
  { time: 90, content: "Học Java", color: "gray" },
  { time: 10, content: "Học lái xe ô tô", color: "gray" },
  { time: 80, content: "Mua sữa", color: "gray" },
  { time: 12, content: "Mua nồi cơm điện", color: "gray" },
];
function App() {
  const [unCompleteTasks, setUnCompleteTasks] = useState(UNCOMPLETETASKS);
  const [completeTasks, setCompleteTasks] = useState(COMPLETETASKS);

  const handleCompleteTask = (identify) => {
    // Render những công việc không được check
    const newTask = unCompleteTasks.filter((task) => task.time !== identify);
    setUnCompleteTasks(newTask);

    // Chuyển những công việc được check xuống phần hoàn thành
    const newCompleteTask = unCompleteTasks.filter(
      (task) => task.time === identify
    );
    newCompleteTask.time = new Date().getTime();
    setCompleteTasks([...completeTasks, ...newCompleteTask]);
  };

  // Đánh dấu những task yêu thích
  const handleAddTaskFavorite = (value) => {
    const newTasks = unCompleteTasks.map((task) => {
      if (task.time !== value) {
        return task;
      }
      if (task.color === "gray") {
        const newTask = {
          ...task,
          color: "yellow",
          time: new Date().getTime(),
        };
        return newTask;
      } else {
        const newTask = { ...task, color: "gray" };
        return newTask;
      }
    });
    setUnCompleteTasks(newTasks);
  };

  // Bỏ check những job đã hoàn thành
  const handleMoveCompletedTask = (value) => {
    // Render lại task đã được check
    const newCompleteTask = completeTasks.filter((task) => task.time !== value);
    setCompleteTasks(newCompleteTask);

    // Chuyển task bỏ check nên mục chưa hoàn thành
    const newTask = completeTasks.filter((task) => task.time === value);
    setUnCompleteTasks([...unCompleteTasks, ...newTask]);
  };

  // Render ra task chưa hoàn thành
  const notCompletedTaskItems = unCompleteTasks
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map((task) => (
      <TaskList
        key={task.time}
        value={task.time}
        taskContent={task.content}
        colorStar={task.color}
        onCheckCompleteTask={handleCompleteTask}
        onAddTaskFavorite={handleAddTaskFavorite}
      />
    ));

  // Render ra task đã hoàn thành
  const completedTaskItems = completeTasks
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map((task) => {
      return (
        <CompleteTask
          key={task.time}
          value={task.time}
          completeTaskContent={task.content}
          colorStar={task.color}
          onMoveCompletedTask={handleMoveCompletedTask}
        />
      );
    });

  const quantity = () => {
    return completeTasks.length;
  };

  // Thêm task mới

  const handleAddTask = (key, job) => {
    if (key === "Enter") {
      const newTask = [
        ...unCompleteTasks,
        ...[{ id: 5, content: job, color: "gray", time: new Date().getTime() }],
      ];
      setUnCompleteTasks(newTask);
    }
  };

  // // render Header
  // const header = <Header addTask={handleAddTask} content={resetInput} />;
  // Làm ô add task trở thành rỗng sau khi nhập xong

  return (
    <div className="App">
      <Header addTask={handleAddTask} />
      <section className="listTask">
        <ul>{notCompletedTaskItems}</ul>
      </section>
      <div className="">
        <section className="">
          <div className="totalComplete">
            <span> Completed</span>
            <span className="quantity">{quantity()}</span>
          </div>
          <ul>{completedTaskItems}</ul>
        </section>
      </div>
    </div>
  );
}

export default App;
