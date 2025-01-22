import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="project-sidebar w-1/3 bg-stone-900 py-16 px-8 text-stone-50 md:w-72 rounded-r-xl">
      <h3 className="mb-8 font-bold uppercase md:text-xl text-store-200">
        Projects
      </h3>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  );
}
