import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl mb-4">find_me</h2>
      <div className="flex space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          {/* <FaGithub /> */}
          Github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          {/* <FaLinkedin /> */}
          Linkedin
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-2xl hover:text-gray-600"
        >
          {/* <FaEnvelope /> */}
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
