import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

const cvByLang: Record<string, string> = {
  es: "/cv/Karen_Varela_CV_ES.pdf",
  en: "/cv/Karen_Varela_CV_EN.pdf",
};

const DownloadCV = () => {
  const { t, i18n } = useTranslation();

  const cvUrl = useMemo(
    () => cvByLang[i18n.language] ?? cvByLang["en"],
    [i18n.language]
  );

  return (
    <a
      href={cvUrl}
      type="application/pdf"
      download="Karen_Varela_CV.pdf"
      className="underline tracking-wide"
    >
      [ {t("downloadResume")} ]
    </a>
  );
};

export default DownloadCV;
