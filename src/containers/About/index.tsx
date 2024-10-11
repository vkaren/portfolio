import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-2xl mb-4">about_me</h2>
      <p className="mb-4">
        As a full stack developer, I specialize in creating efficient, scalable
        web applications. With a strong foundation in both front-end and
        back-end technologies, I enjoy tackling complex problems and turning
        innovative ideas into reality. My experience spans from crafting
        intuitive user interfaces to designing robust server architectures.
      </p>
      <div className="flex flex-wrap gap-4">
        {[
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "Jest",
          "Git",
          "PostgreSQL",
        ].map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-200 rounded">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
