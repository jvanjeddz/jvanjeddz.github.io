import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

import Archmoured from "../public/img/Archmoured.png";
import Puntoarchivos from "../public/img/Puntoarchivos.png";
import Estruct from "../public/img/Estruct-progra.png"
import Basedatos from "../public/img/Basedatos.png";
import Portfolio from "../public/img/Portfolio.png";
import Dotnet from "../public/img/Dotnet-backend-course.png"
import Springboot from "../public/img/Springboot-service-dwback.png"
import Ops from "../public/img/Ops-research-probs.png"
import Microprocessor from "../public/img/Microprocessor-stuff.jpg"

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        <ProjectCard
          img={Archmoured.src}
          title="Archmoured"
          link="https://archmoured.neocities.org"
        />
        <ProjectCard
          img={Puntoarchivos.src}
          title="Puntoarchivos"
          link="https://github.com/jvanjeddz/puntoarchivos"
        />
        <ProjectCard
          img={Estruct.src}
          title="Structured programming stuff"
          link="https://github.com/jvanjeddz/estruct-progra"
        />
        <ProjectCard
          img={Basedatos.src}
          title="Database stuff"
          link="https://github.com/jvanjeddz/basedatos-ejercicios"
        />
        <ProjectCard
          img={Portfolio.src}
          title="Personal portfolio (this site)"
          link="https://github.com/jvanjeddz/jvanjeddz.github.io"
        />
        <ProjectCard
          img={Ops.src}
          title="Operations research stuff"
          link="https://github.com/jvanjeddz/ops-research-probs"
        />
        <ProjectCard
          img={Microprocessor.src}
          title="Microprocessor stuff"
          link="https://github.com/jvanjeddz/microprocessor-stuff"
        />
        <ProjectCard
          img={Springboot.src}
          title="Springboot microservices"
          link="https://github.com/jvanjeddz/springboot-service-dwback"
        />
        <ProjectCard
          img={Dotnet.src}
          title="Bank API (.NET)"
          link="https://github.com/jvanjeddz/dotnet-backend-course"
        />
      </div>
    </div>
  );
};

export default Projects;