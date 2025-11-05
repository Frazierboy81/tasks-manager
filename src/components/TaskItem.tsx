import type { TaskStatus, Task } from "./TaskList";
import React, { useState } from "react";

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}


type Priority = "low" | "medium" | "high";

function TaskItem({task, onStatusChange }: TaskItemProps) {

    const [currentStatus, setCurrentStatus] = useState(task.status);

      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentStatus(e.target.value as TaskStatus);
        onStatusChange(task.id, e.target.value as TaskStatus);
      };

      const statusStyles: { [key in TaskStatus]: string } = {
        pending: "text-yellow-700",
        "in-progress": "text-blue-700",
        completed: "text-green-700",
      };

      const priorityStyles: { [key in Priority]: string } = {
        low: "text-yellow-700",
        medium: "text-blue-700",
        high: "text-red-700",

      }

      return (

        <div className="outline m-4 rounded-md">
         <div>{task.title}</div>
         <div>{task.description}</div>
          <div>
            Status: {" "}
            <span className={statusStyles[task.status]}>{task.status}</span>
          </div>

          <div>
            Priority: {" "}
            <span className={priorityStyles[task.priority]}>{task.priority}</span>
          </div>

          <select value={currentStatus} onChange={handleChange} className={`bg-black-700 h-10 ${statusStyles[currentStatus]}`}>
            <option value="pending">
              <span>Pending</span>
            </option>
            <option value="in-progress">
              <span>In-Progress</span>
            </option>
            <option value="completed">
              <span>Completed</span>
            </option>
          </select>

        </div>

        

      )

}

export default TaskItem;
