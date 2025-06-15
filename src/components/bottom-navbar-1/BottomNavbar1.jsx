import { useEffect, useState } from "react";
import {
  RiAddLine,
  RiArchiveLine,
  RiBookmark3Line,
  RiBriefcaseLine,
  RiHomeSmile2Line,
  RiImage2Line,
  RiSendPlaneLine,
  RiUserLine,
} from "react-icons/ri";
import "./bottomNavbar1.css";

const BottomNavbar1 = () => {
  const [showList, setShowList] = useState(false);
  const [activeLink, setActiveLink] = useState("accueil");

  const toggleExpand = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="nav1__nav">
        <ul className="nav1__list">
          <li>
            <a
              href="#accueil"
              className={`nav1__link ${
                activeLink === "accueil" ? "nav1__active-link" : ""
              }`}>
              <RiHomeSmile2Line />
            </a>
          </li>
          <li>
            <a
              href="#apropos"
              className={`nav1__link ${
                activeLink === "apropos" ? "nav1__active-link" : ""
              }`}>
              <RiUserLine />
            </a>
          </li>
          <li>
            <button className="nav1__expand" onClick={toggleExpand}>
              <RiAddLine
                className={`nav1__expand-icon ${
                  showList ? "nav1__rotate-icon" : ""
                }`}
              />
            </button>
            <ul
              className={`nav1__expand-list ${
                showList ? "nav1__show-list" : ""
              }`}>
              <li>
                <a href="#" className="nav1__expand-link">
                  <RiImage2Line />
                  <span>Gallerie</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav1__expand-link">
                  <RiArchiveLine />
                  <span>Dossiers</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav1__expand-link">
                  <RiBookmark3Line />
                  <span>Save</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#projets"
              className={`nav1__link ${
                activeLink === "projets" ? "nav1__active-link" : ""
              }`}>
              <RiBriefcaseLine />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav1__link ${
                activeLink === "contact" ? "nav1__active-link" : ""
              }`}>
              <RiSendPlaneLine />
            </a>
          </li>
        </ul>
      </nav>

      <main className="nav1__container">
        <section className="nav1__section" id="accueil">
          <h2>ACCUEIL</h2>
        </section>

        <section className="nav1__section" id="apropos">
          <h2>À PROPOS</h2>
        </section>

        <section className="nav1__section" id="projets">
          <h2>PROJETS</h2>
        </section>

        <section className="nav1__section" id="contact">
          <h2>CONTACT</h2>
        </section>
      </main>
    </div>
  );
};

export default BottomNavbar1;
