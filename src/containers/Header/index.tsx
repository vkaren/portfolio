import React from "react";
import avatarImg from "@assets/avatar.png";
import { useTranslation } from "react-i18next";
import TechImg from "@assets/skills/tech.svg";
import DownloadCV from "@components/DownloadCV";

const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-6 mb-4">
        <div className="max-w-36 max-h-36 self-end sm:self-auto border border-gray-600">
          <img src={avatarImg} alt="avatar" className="grayscale-[40%]" />
        </div>
        <h1 className="text-4xl tracking-wide font-medium">{t("title")}</h1>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col">
          <p className="text-xl font-semibold leading-loose tracking-wide">
            {t("subtitle")}
          </p>
          <p className="text-lg">{t("about")}</p>

          <div className="flex flex-wrap gap-5 mt-4">
            <DownloadCV />
            <a
              className="underline tracking-wide"
              href="https://www.linkedin.com/in/karen-perarnau/"
              target="_blank"
            >
              [ LinkedIn ]
            </a>

            <a
              className="underline tracking-wide"
              href="https://github.com/vkaren"
              target="_blank"
            >
              [ GitHub ]
            </a>
          </div>
        </div>

        <div className="w-fit h-fit self-center">
          <TechImg className="w-[245px] h-[218px]" aria-label="PERN Stack" />
        </div>
      </div>
    </section>
  );
};

export default Header;
