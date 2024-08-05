import React, {useState} from "react";
import Task from "./Task";

function TaskList({ Tasks }) {
  const [taskLists, setTaskLists] = useState([]);

  const handleDelete = (taskId) => {
    const updatedTasks = taskLists.filter(taskList => taskList.text !== taskId);
    console.log("Deleting task of id:", taskId);
    setTaskLists(updatedTasks);

  };  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {Tasks.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
