import { contact } from "@data/contact";
import "./style.css";

const Contact = () => {
  return (
    <section id="contact" className="contact_section">
      <div className="contact__title_container">
        <span className="contact__title_subheading">Get in touch</span>
        <h2 className="contact__title">Contact me</h2>
      </div>

      <ul className="contact__list">
        {contact?.map((contact, i) => (
          <li key={`contact-${i}`} className="contact">
            <div className="contact__icon">
              <img src={`src/data/${contact.icon}`} />
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
        ))}
      </ul>
    </section>
  );
};

export default Contact;
