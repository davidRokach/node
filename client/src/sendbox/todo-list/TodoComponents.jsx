import { useCallback, useState } from "react";
import NumberOfTask from "./NumberOfTask";

const TodoComponents = () => {
  const INITIAL_TODO = { todo: "" };
  const [task, setTask] = useState(INITIAL_TODO);
  const [tasks, setTasks] = useState([]);
  const [numTasks, setnumTasks] = useState(0);

  const incrementNumTasks = useCallback(() => {
    setnumTasks(tasks.length + 1);
  }, [tasks]);

  const createNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask(INITIAL_TODO);
    incrementNumTasks();
  };

  return (
    <>
      <form>
        <h3>
          Todo: <span style={{ fontWeight: "bolder" }}>{task.todo}</span>
        </h3>

        <input
          type="text"
          value={task.todo}
          onChange={(e) => setTask({ ...task, todo: e.target.value })}
        />
        <button onClick={createNewTask} disabled={!task.todo}>
          Create new task
        </button>
      </form>

      <NumberOfTask numOfTasks={numTasks}>the number of tasks</NumberOfTask>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}.{task.todo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoComponents;
