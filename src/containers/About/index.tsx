import React from "react";
import Skills from "@components/Skills";
import TechImg from "@assets/skills/tech.svg";

const About = () => {
  return (
    <section id="about" className="flex mb-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-medium tracking-wide">about_me</h2>
        <p className="text-xl font-extralight leading-loose tracking-wide">
          As a full stack developer, I specialize in creating efficient,
          scalable web applications. With a strong foundation in both front-end
          and back-end technologies, I enjoy tackling complex problems and
          turning innovative ideas into reality.
        </p>
        <Skills />
      </div>

      <div>
        <TechImg />
      </div>
    </section>
  );
};

export default About;
