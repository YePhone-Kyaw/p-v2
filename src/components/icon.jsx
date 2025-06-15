const { default: IconDownload } = require("./icons/download");
const { default: IconFacebook } = require("./icons/facebook");
const { default: IconGitHub } = require("./icons/github");
const { default: IconInstagram } = require("./icons/instagram");
const { default: IconLinkedin } = require("./icons/linkedin");

import PropTypes from "prop-types";
import IconDemoVideo from "./icons/demo";
import IconHandUp from "./icons/hand-up";
import IconCodePen from "./icons/codepen";

const Icon = ({ name, ...props }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub {...props} />;
    case "LinkedIn":
      return <IconLinkedin {...props} />;
    case "Facebook":
      return <IconFacebook {...props} />;
    case "Instagram":
      return <IconInstagram {...props} />;
    case "CodePen":
      return <IconCodePen {...props} />;
    case "Demo":
      return <IconDemoVideo {...props} />;
    case "Hand-up":
      return <IconHandUp {...props} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
