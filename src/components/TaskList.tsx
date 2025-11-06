import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useState } from "react";


export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}
// 1. map over the task and render a tasklist item for each task.


// 2. pass the onstatuschange and ondelete to the task list item
// 3. add the select and delete button and use the onstatus to handle user interaction.
// 4. implement filter
function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
    const [filterTasks, setFilterTasks] = useState<Task[]>(tasks);

        const onFilterChange = (filters: {
            status?: TaskStatus;
            priority?: "low" | "medium" | "high";
        }) => { console.log(filters);

        const results = tasks.filter((task) => {
            
            if (filters.status && filters.priority) {

            (task.status === filters.status && task.priority === filters.priority);

            }

            if (filters.status) {

                return task.status === filters.status
            }

            if (!filters.status && !filters.priority) {
                return true
            }

        });

        console.log(results);
        setFilterTasks(results);
        return results
};

    return(

        <div className="text-2xl pt-4">

            
            <div className="flex flex-row">
                <div>Status</div>
                <div className=" ml-22">Priority</div>
            </div>
            
            <TaskFilter onFilterChange={onFilterChange}/>
            {filterTasks.map((tasks) => (
                <TaskItem task={tasks} key={tasks.id} onStatusChange={onStatusChange} onDelete={onDelete}/>
            ))}            
        </div>
    )
}
export default TaskList;