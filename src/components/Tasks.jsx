import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <div className="bg-stone-900 p-8 rounded-xl">
      <h3 className="text-stone-200 font-bold uppercase mb-4">Tasks</h3>
      <NewTask onAdd={onAdd} />
      {!tasks.length ? (
        <p className="text-stone-300 mb-4">
          The project dose not have any task
        </p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="mb-4 flex items-center justify-between my-4"
            >
              <h4 className="text-stone-400 font-bold">{task.text}</h4>
              <button
                className="text-stone-200 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
