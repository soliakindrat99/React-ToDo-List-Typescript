import priority from '../helpers/constants.js';
import getPriorityColor from "../helpers/getPriorityColor";
import { Box, InputLabel, Select, MenuItem } from "@mui/material";
import "./TaskFilter.css";

const TaskFilter = (props: any) => {
  const { selected = false, onChangeFilter = () => {} } = props;

  const dropdownChangeHandler = (event: any) => {
    onChangeFilter(event.target.value);
  };

  return (
    <Box className="taskFilter">
      <InputLabel className="inputLabel">Filter by Priority</InputLabel>
      <Select
        className="selectPriority"
        type="text"
        size="small"
        fullWidth
        value={selected}
        onChange={dropdownChangeHandler}
        defaultValue={"All"}
        sx={getPriorityColor(selected)}
      >
        <MenuItem sx={getPriorityColor("All")} value={"All"}>
          All
        </MenuItem>
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
    </Box>
  );
};

export default TaskFilter;
