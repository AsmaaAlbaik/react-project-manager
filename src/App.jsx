import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

  function HandelAddProject() {
    console.log('test...');
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content = null;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject projects={projectsState.projects} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={HandelAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={HandelAddProject} />
      {content}
    </main>
  );
}

export default App;
