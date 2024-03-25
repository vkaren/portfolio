import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageIcon } from "@heroicons/react/24/outline";
import "./style.css";

const LanguageSwitch = () => {
  const [t, i18n] = useTranslation("global");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    navigator.language.split("-")[0]
  );

  const toggleLanguageOptions = () => {
    setShowOptions(!showOptions);
  };

  const onSelectLanguage = (event) => {
    const lng = event.currentTarget.name;

    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageIcon className="lng-icon" onClick={toggleLanguageOptions} />

      {showOptions && (
        <>
          <ul className="lng-options">
            <li className="lng__option">
              <input
                className="option__checkbox"
                type="checkbox"
                id="es"
                name="es"
                checked={selectedLanguage === "es"}
                onChange={onSelectLanguage}
              />
              <label className="option__label" htmlFor="es">
                Español
              </label>
            </li>

            <li className="lng__option">
              <input
                className="option__checkbox"
                type="checkbox"
                id="en"
                name="en"
                checked={selectedLanguage === "en"}
                onChange={onSelectLanguage}
              />
              <label className="option__label" htmlFor="en">
                English
              </label>
            </li>
          </ul>

          <div className="lng-overlay" onClick={toggleLanguageOptions}></div>
        </>
      )}
    </>
  );
};

export default LanguageSwitch;
