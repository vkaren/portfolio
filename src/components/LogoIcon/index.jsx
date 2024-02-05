import logoIcon from "@images/icon-logo.png";

const LogoIcon = ({ className }) => {
  return (
    <a href="#header" className={className}>
      <img alt="logo" src={logoIcon} />
    </a>
  );
};

export default LogoIcon;
