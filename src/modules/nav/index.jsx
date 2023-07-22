import "./navStyles.css";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { RiComputerFill } from "react-icons/ri";
import { useContext } from "react";
import { IntersectionObserver } from "../../context/IntersectionObserver";
import { LangContext } from "../../context/langContext";
import { FormattedMessage } from "react-intl";
import usa from "../../assets/estados-unidos.png";
import spain from "../../assets/espana.png";
function Nav() {
  const { toggleActive } = useContext(IntersectionObserver);
  const { handleLanguage, locale } = useContext(LangContext);

  return (
    <div className="container__nav">
      {locale === "en-US" ? (
        <div onClick={() => handleLanguage("es-ES")} className="tooltip">
          <img className="tooltip__img" src={spain} alt="icon-spain" />
          <span className="tooltiptext">Cambiar a Español</span>
        </div>
      ) : (
        <div onClick={() => handleLanguage("en-US")} className="tooltip">
          <img className="tooltip__img" src={usa} alt="icon-usa" />
          <span className="tooltiptext">Change to English</span>
        </div>
      )}

      <nav>
        <a
          aria-label="Go to the section home"
          className={`${toggleActive === "portada" ? "active" : ""} tooltip`}
          href="#portada"
        >
          <FaHome className="icon__nav" />
          <span className="tooltiptext">
            <FormattedMessage id="nav.home" defaultMessage="Home" />
          </span>
        </a>

        <a
          aria-label="Go to the section about me"
          className={`${toggleActive === "aboutMe" ? "active" : ""} tooltip`}
          href="#aboutMe"
        >
          <SiAboutdotme className="icon__nav" />
          <span className="tooltiptext">
            <FormattedMessage id="nav.about" defaultMessage="About Me" />
          </span>
        </a>

        <a
          aria-label="Go to the section projects"
          className={`${toggleActive === "projects" ? "active" : ""} tooltip`}
          href="#projects"
        >
          <RiComputerFill className="icon__nav" />
          <span className="tooltiptext">
            <FormattedMessage id="nav.projects" defaultMessage="Projects" />
          </span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
