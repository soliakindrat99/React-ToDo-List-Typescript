import priority from '../helpers/constants.js';
import getPriorityColor from "../helpers/getPriorityColor";
import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import "./TaskForm.css";

const TaskForm = (props: any) => {
  const {
    isEdit = false,
    updateData = { priority: "", title: "", description: "" },
    newPriority = "",
    changePriority = () => {},
    setNewPriority = () => {},
    newTitle = "",
    changeTitle = () => {},
    setNewTitle = () => {},
    newDescription = "",
    changeDescription = () => {},
    setNewDescription = () => {},
    addTask = () => {},
    updateTask = () => {},
    cancelUpdate = () => {},
  } = props;

  const changePriorityHandler = (event: any) => {
    isEdit ? changePriority(event) : setNewPriority(event.target.value);
  };

  const changeTitleHandler = (event: any) => {
    isEdit ? changeTitle(event) : setNewTitle(event.target.value);
  };

  const changeDescriptionHandler = (event: any) => {
    isEdit ? changeDescription(event) : setNewDescription(event.target.value);
  };

  return (
    <Box className="taskForm">
      <FormControl margin="normal" color="primary">
        <FormLabel className="formLabel">Priority</FormLabel>
        <Select
          className="selectPriority"
          type="text"
          size="small"
          defaultValue={priority.low}
          sx={getPriorityColor(isEdit ? updateData.priority : newPriority)}
          value={isEdit ? updateData.priority : props.newPriority}
          onChange={changePriorityHandler}
        >
          <MenuItem sx={getPriorityColor(priority.high)} value={priority.high}>
            High
          </MenuItem>
          <MenuItem sx={getPriorityColor(priority.medium)} value={priority.medium}>
            Medium
          </MenuItem>
          <MenuItem sx={getPriorityColor(priority.low)} value={priority.low}>
            Low
          </MenuItem>
        </Select>

        <FormLabel className="formLabel">Enter Title</FormLabel>
        <TextField
          className="inputTitle"
          type="text"
          size="small"
          value={isEdit ? updateData.title : newTitle}
          onChange={changeTitleHandler}
        />

        <FormLabel className="formLabel">Enter Description</FormLabel>
        <TextField
          className="inputDescription"
          type="text"
          size="small"
          value={isEdit ? updateData.description : newDescription}
          onChange={changeDescriptionHandler}
        />

        {isEdit ? (
          <>
            <Button
              className="updateButton"
              color="success"
              onClick={updateTask}
              variant="contained"
            >
              Update
            </Button>
            <Button
              className="cancelButton"
              color="warning"
              onClick={cancelUpdate}
              variant="contained"
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            className="addButton"
            color="success"
            onClick={addTask}
            variant="contained"
          >
            Add Task
          </Button>
        )}
      </FormControl>
    </Box>
  );
};

export default TaskForm;
