import React from "react";
import data from "@data/contact/contact.json";
import ContactLink from "@components/ContactLink";

const { contact } = data;

const Contact = () => {
  return (
    <section id="contact" className="flex items-center space-x-4 mt-auto pt-4">
      {contact.map((c) => (
        <ContactLink key={c.name} title={c.name} href={c.url} icon={c.icon} />
      ))}
    </section>
  );
};

export default Contact;
