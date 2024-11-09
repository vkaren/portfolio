import React from "react";
import CursorIcon from "@assets/icons/icon-cursor.svg";

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
    <div className="min-w-[309px] max-w-[309px] p-4 border border-black">
      <div className="w-full h-[180px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center grayscale-[60%]"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm font-medium">{description}</p>
        {url && (
          <CursorIcon
            href={url}
            width={20}
            height={20}
            className="float-right"
          />
        )}
      </div>
    </div>
  );
};

export default Project;
