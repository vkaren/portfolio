import React from "react";

interface ContactLinkProps {
  title: string;
  href: string;
  icon: string;
}

const ContactLink = ({ title, href, icon }: ContactLinkProps) => {
  const iconUrl = require(`@data/${icon}`);

  return (
    <a
      title={title}
      href={href}
      target="_blank"
      className="inline-block w-6 text-base hover:text-gray-600"
    >
      <img src={iconUrl} alt={title} />
    </a>
  );
};

export default ContactLink;
