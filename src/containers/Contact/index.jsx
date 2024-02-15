import { useEffect, useState } from "react";
import { contact } from "@data/contact";
import "./style.css";

const Contact = () => {
  const [contactIcons, setContactIcons] = useState([]);

  useEffect(() => {
    const loadContactFiles = async () => {
      try {
        const files = import.meta.glob("../../data/contact/icons/*.png");

        const promises = Object.keys(files).map(async (path) => {
          const module = await files[path]();
          return module;
        });

        const data = await Promise.all(promises);

        setContactIcons(data);
      } catch (error) {
        console.error("Error loading JSON files:", error);
      }
    };

    loadContactFiles();
  }, []);

  return (
    <section id="contact" className="contact_section">
      <div className="contact__title_container">
        <span className="contact__title_subheading">Get in touch</span>
        <h2 className="contact__title">Contact me</h2>
      </div>

      <ul className="contact__list">
        {contact?.map((contact, i) => {
          const icon = contactIcons.find((icon) => {
            const iconName = contact.icon.split(".")[0];

            return icon.default.includes(iconName);
          })?.default;

          return (
            <li key={`contact-${i}`} className="contact">
              <div className="contact__icon">
                <img src={icon} alt={`${contact.name} contact`} />
              </div>
              <h4 className="contact__name">{contact.name}</h4>
              <a
                className="contact__link"
                href={
                  contact.name === "Email"
                    ? `mailto:${contact.url}`
                    : `https://${contact.url}`
                }
                target="__blank"
                rel="noopener noreferrer"
              >
                {contact.url}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
