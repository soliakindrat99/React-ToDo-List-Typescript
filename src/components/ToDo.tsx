import { useState } from "react";
import TaskFilter from "./TaskFilter";
import getPriorityColor from "../helpers/getPriorityColor";

import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "./ToDo.css";

const ToDo = (props: any) => {
  const { toDo = [], setUpdateData = () => {}, deleteTask = () => {} } = props;

  const [filteredPriority, setFilteredPriority] = useState("All");

  const filterChangeHandler = (selectedPriority: string) => {
    setFilteredPriority(selectedPriority);
  };

  const filteredTasks = toDo.filter((task: any) => {
    if (filteredPriority !== "All") return task.priority === filteredPriority;
    else return true;
  });

  const editTaskHandler = (task: any) => {
    setUpdateData({
      id: task.id,
      priority: task.priority,
      title: task.title,
      description: task.description,
    });
  };

  return (
    <>
      <TaskFilter
        selected={filteredPriority}
        onChangeFilter={filterChangeHandler}
      />
      <List>
        {filteredTasks &&
          filteredTasks.map((task: any) => {
            return (
              <ListItem className="taskBg" key={task.id}>
                <ListItemText
                  className="priorityCol"
                  sx={getPriorityColor(task.priority)}
                >
                  {task.priority}
                </ListItemText>
                <ListItemText>
                  {task.title} {task.description}
                </ListItemText>
                <IconButton title="Edit" onClick={() => editTaskHandler(task)}>
                  <EditOutlinedIcon className="onlinedIcon"/>
                </IconButton>
                <IconButton title="Delete" onClick={() => deleteTask(task.id)}>
                  <DeleteOutlinedIcon className="onlinedIcon"/>
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default ToDo;
