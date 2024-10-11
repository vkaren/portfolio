import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl mb-4">_recent_projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* {projects.map((project, index) => (
          <div
            key={index}
            className={`border p-4 cursor-pointer ${
              activeProject === index ? "bg-gray-100" : ""
            }`}
            onClick={() => setActiveProject(index)}
          >
            <h3 className="text-xl mb-2">{project.name}</h3>
            <p>{project.description}</p>
            <div className="mt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Projects;
