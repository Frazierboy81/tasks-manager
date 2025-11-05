import type { TaskStatus } from "./TaskList";
import { useState } from "react";

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}

function TaskFilter({onFilterChange}: TaskFilterProps) {
  const [filters, setFilters] = useState({
    status: undefined,
    priority: undefined,
  });
const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const {name, value} = e.target;
  setFilters(prev =>({...prev, [name]: value}));

  const newFilter = {
    ...filters,
    [name]: value
  }
  onFilterChange(newFilter);
}

return (
  <div className="">
    <select name="status" onChange={handleChange} className="outline">
      <option value="">All</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
    <select name="priority" onChange={handleChange} className="outline ml-4">
      <option value="">All</option>
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select>
  </div>
  )

}
 export default TaskFilter