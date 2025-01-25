import { useState } from "react";
import Button from "./Button";

const NewTask = ({onAdd}) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSaveTask = () => {
    onAdd(task);
    setTask("");
  };

  return (
    <div className="max-w-md my-4">
      <div className="md:flex">
        <div className="flex ">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            className="mt-4 p-2 border border-gray-300 text-stone-700 bg-stone-200 rounded-md w-64"
            placeholder="Enter your task"
          />
          <Button
            onClick={handleSaveTask}
            className="mt-4 mx-2 text-stone-300 p-2 rounded-md hover:bg-stone-500 bg-stone-800"
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
