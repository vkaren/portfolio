import React from "react";
import Skills from "@components/Skills";
import TechImg from "@assets/skills/tech.svg";

const About = () => {
  return (
    <section id="about" className="flex flex-col sm:flex-row mb-12">
      <div className="flex flex-col gap-4">
        <h2 className="order-1 sm:-order-none text-3xl font-medium tracking-wide">
          about_me
        </h2>
        <p className="order-3 sm:-order-none text-xl font-extralight leading-loose tracking-wide">
          As a full stack developer, I specialize in creating efficient,
          scalable web applications. With a strong foundation in both front-end
          and back-end technologies, I enjoy tackling complex problems and
          turning innovative ideas into reality.
        </p>
        <Skills />
      </div>

      <div className="w-fit h-fit self-center">
        <TechImg className="w-[245px] h-[218px] sm:w-[305px] sm:h-[278px] lg:w-[345px] lg:h-[318px]" />
      </div>
    </section>
  );
};

export default About;
