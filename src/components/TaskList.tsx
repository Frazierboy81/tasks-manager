

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
    return(
        
        <div className="text-2xl">
            <h2>Task List</h2>
        </div>
    )
}
export default TaskList;