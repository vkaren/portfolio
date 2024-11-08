import React from "react";
import data from "@data/contact/contact.json";
import ContactLink from "@components/ContactLink";

const { contact } = data;

const Contact = () => {
  return (
    <section id="contact" className="flex  items-center gap-6 mt-auto py-4">
      <h2 className="text-xl">find_me</h2>
      <div className="flex items-center space-x-4">
        {contact.map((c) => (
          <ContactLink title={c.name} href={c.url} icon={c.icon} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
