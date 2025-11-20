import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import CvEs from "@assets/cv/Karen_Varela_CV_ES.pdf";
import CvEn from "@assets/cv/Karen_Varela_CV_EN.pdf";

const cvByLang: Record<string, string> = {
  es: CvEs,
  en: CvEn,
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
      download
      target="_blank"
      rel="noopener noreferrer"
      className="underline tracking-wide"
    >
      [ {t("downloadResume")} ]
    </a>
  );
};

export default DownloadCV;
