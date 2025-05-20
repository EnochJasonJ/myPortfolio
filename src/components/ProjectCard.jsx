import React from "react";
import Tilt from "react-parallax-tilt";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for project 3",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for project 4",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description for project 5",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description for project 6",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Description for project 7",
  },
  {
    id: 8,
    title: "Project 8",
    description: "Description for project 8",
  },
  {
    id: 9,
    title: "Project 9",
    description: "Description for project 9",
  },
  {
    id: 10,
    title: "Project 10",
    description: "Description for project 10",
  },
];

function ProjectCard() {
  return (
    <div className="mx-auto mt-10 flex flex-wrap gap-6 justify-center">
      {projects.map((project) => (
        <Tilt
          key={project.id}
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          transitionSpeed={5000}
          glareEnable={true}
          glareColor="white"
          gyroscope={true}
          className="h-[300px] w-[275px]"
        >
          <div className="h-full w-full rounded-xl p-[5px] bg-gradient-to-br from-purple-500 via-teal-500 to-pink-500">
            <div className="h-full w-full rounded-xl bg-slate-900 gap-10 flex flex-col items-center justify-center">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  )
}


export default ProjectCard;
