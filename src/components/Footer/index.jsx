import contactData from "@data/contact/contact.json";
import "./styles.css";

const Footer = () => {
  const { contact } = contactData;

  return (
    <footer className="page_footer">
      <h3 className="footer_title">Contact</h3>

      <ul className="footer_contact-list">
        {contact.map((contactInfo) => {
          const contactInfoImg = require(`@data/${contactInfo.icon}`);

          return (
            <li>
              <a
                className="contact_link"
                href={contactInfo.url}
                target="__blank"
              >
                <div className="contact_link__img">
                  <img src={contactInfoImg} alt={contactInfo.name} />
                </div>
                <span className="contact_link__name">{contactInfo.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
