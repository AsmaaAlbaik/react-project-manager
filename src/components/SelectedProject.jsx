import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  const date = new Date(project.dueDate).toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pd-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="flex items-center justify-between text-left text-3xl text-stone-600 font-bold mb-2">
              <span>{project.title}</span>
              <span className="text-lg">{date}</span>
            </h2>
            <p className="text-stone-300 whitespace-pre-wrap text-left">
              {project.description}
            </p>
          </div>
          <button
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            onClick={onDelete}
          >
            Delete Project
          </button>
        </div>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
