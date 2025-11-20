import React from "react";
import { t } from "i18next";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  builtWith?: string[];
  url?: string;
}

const Project = ({ title, description, image, url }: ProjectProps) => {
  const imageUrl = require(`@data/${image}`);

  return (
    <div className="flex flex-col min-w-[250px] max-w-[250px] sm:min-w-[310px] sm:max-w-[310px] min-h-[385px] max-h-[385px] p-4 border border-black overflow-y-auto">
      <div className="w-full h-[180px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center grayscale-[30%]"
        />
      </div>
      <div className="flex-1 gap-2 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm font-medium">{description}</p>
      </div>

      {url && (
        <a
          href={url}
          title={title}
          target="_blank"
          className="self-end mt-auto mb-0"
        >
          {t("projects.url")}
        </a>
      )}
    </div>
  );
};

export default Project;
