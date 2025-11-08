import CommonConstant from "../../constants/common.constant";
import ExcludedLinks from "../../constants/excluded-links.constant";
import ILinks from "../../interafaces/ILinks.interaface";
import linksData from "../../dummy-data/links.json";
import getLink from "../../services/link-service";
import icon from "../../assets/images/icon.jpg";
import "./Hero.css";

/**
 * The `Hero` component to be rendered.
 *
 * @returns  {JSX.Element}   The `Hero` component.
 */
function Hero() {
  const activeStatus = getLink(CommonConstant.STRINGS.ACTIVE_STATUS, linksData);
  const location = getLink(CommonConstant.STRINGS.LOCATION, linksData);
  // const rightArrow = getLink(CommonConstant.STRINGS.RIGHT_ARROW, links);

  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={icon} alt="hero-image" />
      </div>
      <div className="status-container">
        <div className="active-status">
          <div className="icon">
            <img src={activeStatus?.icon} alt={activeStatus?.name} />
          </div>
          <div className="text">
            <p>{CommonConstant.STRINGS.AVAILABLE_FOR_WORK}</p>
          </div>
        </div>
        <div className="links-info">
          {linksData
            .filter((link: ILinks) => !ExcludedLinks.EXCLUDED.has(link.name))
            .map((link: ILinks, index: number) => (
              <div className="link" key={index}>
                <a href={link?.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="link-image"
                    src={link?.icon}
                    alt={link?.name}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="introduction-container">
        <div className="greetings-text">
          <h1>{CommonConstant.STRINGS.GREETINGS}</h1>
        </div>
        <div className="location">
          <div className="location-icon">
            <img src={location?.icon} alt={location?.name} />
          </div>
          <div className="location-text">
            <p>{CommonConstant.HERO_DATA.LOCATION}</p>
          </div>
          {/* <div className="more-hero-details">
            <a className="button" href="/#">
              {CommonConstant.STRINGS.MORE_ABOUT_ME}
            </a>
            <div className="right-arrow">
              <img src={rightArrow?.icon} alt={rightArrow?.name} />
            </div>
          </div> */}
        </div>
        <div className="about-message">
          <p>{CommonConstant.STRINGS.MESSAGE}</p>
        </div>
      </div>
      <div className="hero-details">
        <div className="aboutme-section">
          <p>{CommonConstant.STRINGS.DETAILS_ABOUT_ME}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
