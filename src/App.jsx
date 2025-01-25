import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [
      {
        id: 1,
        title: "Project 1",
        description: "This is project 1",
        dueDate: "2022-12-12",
        tasks: [
          { id: 1, text: "Task 1" },
          { id: 2, text: "Task 2" },
        ],
      },
      {
        id: 2,
        title: "Project 2",
        description: "This is project 2",
        dueDate: "2022-12-12",
        tasks: [
          { id: 1, text: "Task 1 For project 2" },
          { id: 2, text: "Task 2 For project 2" },
        ],
      },
      {
        id: 3,
        title: "Project 3",
        description: "This is project 3",
        dueDate: "2025-1-1",
        tasks: [
          { id: 1, text: "Task 1 For project 3" },
          { id: 2, text: "Task 2 For project 3" },
          { id: 3, text: "Task 2 For project 3" },
        ],
      },
    ],
    selectedProjectId: undefined,
  });

  function handelStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handelCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handelSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handelAddProject(project) {
    setProjectsState((prevState) => {
      const newProject = {
        ...project,
        id: Math.random(),
        tasks: [],
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handelDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const handelAddTask = (text) => {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [{ id: Date.now(), text }, ...project.tasks],
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  };

  const handelDeleteTask = (taskId) => {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handelDeleteProject}
      onAddTask={handelAddTask}
      onDeleteTask={handelDeleteTask}
      tasks={selectedProject?.tasks || []}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handelAddProject} onCancel={handelCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handelStartAddProject}
        projects={projectsState.projects}
        onSelectedProject={handelSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
