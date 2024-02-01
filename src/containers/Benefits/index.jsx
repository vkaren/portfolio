import "./style.css";

const Benefits = () => {
  return (
    <section className="benefits_section">
      <div className="benefits__photo"></div>

      <div className="benefits__content">
        <h2 className="benefits__content_title">
          Experience the Power of a Skilled Frontend Developer
        </h2>
        <p className="benefits__content_text">
          By working with me, clients benefit from my expertise in frontend
          development and my dedication to creating high-quality websites. I
          strive to understand their unique needs and deliver solutions that
          exceed their expectations.
        </p>

        <ul className="benefits__content_list">
          <li className="list__benefit">
            <h3 className="benefit__title">Expertise</h3>
            <p className="benefit__text">
              I have a solid understanding of frontend development and bring
              valuable experience to every project.
            </p>
          </li>

          <li className="list__benefit">
            <h3 className="benefit__title">Quality</h3>
            <p className="benefit__text">
              I am committed to delivering websites that are visually stunning,
              user-friendly, and performant.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
