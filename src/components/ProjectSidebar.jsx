import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="project-sidebar w-1/3 bg-stone-900 py-16 px-8 text-stone-50 md:w-72 rounded-r-xl">
      <h3 className="mb-8 font-bold uppercase md:text-xl text-store-200">
        Projects
      </h3>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          return (
            <li key={project.id}>
              <button
                className={`text-left w-full px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200${
                  isSelected ? " bg-stone-800 text-stone-200" : " text-stone-400"
                }`}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
