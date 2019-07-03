import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  const range = [...Array(5).keys()];
  const data = {
    title: "Paulo Chaves",
    text: "Posted by Paulo Chaves",
    date: "3rd September, 2am"
  };

  return (
    <div className="project-list section">
      {range.map(id => (
        <ProjectSummary key={id} project={{ id, ...data }} />
      ))}
    </div>
  );
};

export default ProjectList;
