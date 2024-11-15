import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type SupportedLanguage = "en" | "es";

const languages: { code: SupportedLanguage; name: string }[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<SupportedLanguage>(
    (i18n.language as SupportedLanguage) || "es"
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    closeSelector();
  };

  const closeSelector = () => setIsOpen(false);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="flex items-center justify-center w-4 h-4 py-2 px-3 text-base border border-black hover:bg-gray-50"
            id="language-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleDropdown}
          >
            {language}
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 z-30 mt-2 w-56 bg-white border border-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <div className="py-1" role="none">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`${
                    language === lang.code
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  } flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                  onClick={() => selectLanguage(lang.code as SupportedLanguage)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 bg-gray-500/20 h-screen"
          onClick={closeSelector}
        />
      )}
    </>
  );
};

export default LanguageSelector;
