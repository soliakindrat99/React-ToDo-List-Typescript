import { useState } from "react";
import TaskForm from "./components/TaskForm";
import ToDo from "./components/ToDo";

import { Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState<any>([
    { id: 1, priority: 'High', title: "Task 1", description: "t1" },
    { id: 2, priority: 'Medium', title: "Task 2", description: "t2" },
  ]);

  const [newPriority, setNewPriority] = useState("Low");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [updateData, setUpdateData] = useState<any>("");

  const addTask = () => {
    if (newTitle && newDescription) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        priority: newPriority,
        title: newTitle,
        description: newDescription,
      };
      setToDo([...toDo, newEntry]);
      setNewTitle("");
      setNewDescription("");
    }
  };

  const deleteTask = (id: number) => {
    let newTasks = toDo.filter((task:any) => task.id !== id);
    setToDo(newTasks);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changePriority = (e: any) => {
    let newEntry = {
      id: updateData.id,
      priority: e.target.value,
      title: updateData.title,
      description: updateData.description,
    };
    setUpdateData(newEntry);
  };

  const changeTitle = (e: any) => {
    let newEntry = {
      id: updateData.id,
      priority: updateData.priority,
      title: e.target.value,
      description: updateData.description,
    };
    setUpdateData(newEntry);
  };

  const changeDescription = (e: any) => {
    let newEntry = {
      id: updateData.id,
      priority: updateData.priority,
      title: updateData.title,
      description: e.target.value,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <Box className="container App">
      <Typography variant="h4">To Do List App</Typography>

      {updateData ? (
        <TaskForm
          isEdit={true}
          updateData={updateData}
          newPriority={newPriority}
          changePriority={changePriority}
          setNewPriority={setNewPriority}
          newTitle={newTitle}
          changeTitle={changeTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          changeDescription={changeDescription}
          setNewDescription={setNewDescription}
          addTask={addTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <TaskForm
          isEdit={false}
          updateData={updateData}
          newPriority={newPriority}
          changePriority={changePriority}
          setNewPriority={setNewPriority}
          newTitle={newTitle}
          changeTitle={changeTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          changeDescription={changeDescription}
          setNewDescription={setNewDescription}
          addTask={addTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      )}

      <Typography variant="h4">{toDo && toDo.length ? "" : "No tasks..."}</Typography>
      <ToDo toDo={toDo} setUpdateData={setUpdateData} deleteTask={deleteTask} />
    </Box>
  );
}

export default App;