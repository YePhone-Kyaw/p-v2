const { default: IconDownload } = require("./icons/download");
const { default: IconFacebook } = require("./icons/facebook");
const { default: IconGitHub } = require("./icons/github");
const { default: IconInstagram } = require("./icons/instagram");
const { default: IconLinkedin } = require("./icons/linkedin");

import PropTypes from "prop-types";
import IconDemoVideo from "./icons/demo";
import IconHandUp from "./icons/hand-up";
import IconHtml from "./icons/html";
import IconCss from "./icons/css";
import IconJavaScript from "./icons/javascript";
import IconJava from "./icons/java";
import IconTypeScript from "./icons/typescript";

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
    case "Resume":
      return <IconDownload {...props} />;
    case "Demo":
      return <IconDemoVideo {...props} />;
    case "Hand-up":
      return <IconHandUp {...props} />;
    case "Html":
      return <IconHtml {...props} />;
    case "Css":
      return <IconCss {...props} />;
    case "JavaScript":
      return <IconJavaScript {...props} />;
    case "TypeScript":
      return <IconTypeScript />;
    case "Java":
      return <IconJava {...props} />;

    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
