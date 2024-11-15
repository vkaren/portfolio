import React from "react";
import avatarImg from "@assets/avatar.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col sm:flex-row sm:gap-12 lg:flex-row-reverse lg:items-end lg:justify-end ">
      <div className="max-w-64">
        <h1 className="text-5xl tracking-wide mb-4 font-medium">
          {t("title")}
        </h1>
        <p className="text-xl">{t("subtitle")}</p>
      </div>
      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 self-end sm:self-auto border border-gray-600">
        <img src={avatarImg} alt="avatar" className="grayscale-[40%]" />
      </div>
    </section>
  );
};

export default Header;
