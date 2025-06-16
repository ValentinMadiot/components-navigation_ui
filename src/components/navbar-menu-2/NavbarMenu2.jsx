import { useEffect, useState } from "react";
import {
  RiApps2Line,
  RiArrowDownSLine,
  RiBookMarkLine,
  RiCloseLine,
  RiCodeLine,
  RiCodeSSlashLine,
  RiCommunityLine,
  RiFilePaper2Line,
  RiFlashlightLine,
  RiHeart3Line,
  RiMenuLine,
  RiPenNibLine,
  RiShieldLine,
} from "react-icons/ri";

import "./navbarMenu2.css";

const NavbarMenu2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1118) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const DropdownItem = ({ label, isOpen, onToggle, groups }) => (
    <li
      className={`nav5__dropdown-item ${isOpen ? "nav5__show-dropdown" : ""}`}>
      <div className="nav5__link nav5__dropdown-button" onClick={onToggle}>
        {label} <RiArrowDownSLine className="nav5__dropdown-arrow" />
      </div>
      <div
        className="nav5__dropdown-container"
        style={{ height: isOpen ? "auto" : undefined }}>
        <div className="nav5__dropdown-content">
          {groups.map((group, index) => (
            <div className="nav5__dropdown-group" key={index}>
              <div className="nav5__dropdown-icon">{group.icon}</div>
              <span className="nav5__dropdown-title">{group.title}</span>
              <ul className="nav5__dropdown-list">
                {group.links.map((text, i) => (
                  <li key={i}>
                    <a href="#" className="nav5__dropdown-link">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );

  return (
    <div className="nav5__body">
      <header className="nav5__header">
        <nav className="nav5 nav5__container">
          <div className="nav5__data">
            <a href="#" className="nav5__logo">
              <RiCodeSSlashLine /> Logo
            </a>

            <div
              className={`nav5__toggle ${menuOpen ? "nav5__show-icon" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <RiMenuLine className="nav5__toggle-menu" />
              <RiCloseLine className="nav5__toggle-close" />
            </div>
          </div>

          <div className={`nav5__menu ${menuOpen ? "nav5__show-menu" : ""}`}>
            <ul className="nav5__list">
              <li>
                <a href="#" className="nav5__link">
                  Accueil
                </a>
              </li>

              {/* DROPDOWN 1 */}
              <DropdownItem
                label="Découvrir"
                isOpen={openDropdown === "decouvrir"}
                onToggle={() => toggleDropdown("decouvrir")}
                groups={[
                  {
                    icon: <RiFlashlightLine />,
                    title: "Cours les plus vus",
                    links: [
                      "HTML pour débutants",
                      "CSS avancé",
                      "JavaScript orienté objet",
                    ],
                  },
                  {
                    icon: <RiHeart3Line />,
                    title: "Cours populaires",
                    links: [
                      "Développement avec Flutter",
                      "Développement Web avec React",
                      "Expert back-end",
                    ],
                  },
                  {
                    icon: <RiBookMarkLine />,
                    title: "Métiers",
                    links: [
                      "Développement Web",
                      "Développement d'apps",
                      "Design UI/UX",
                      "Sécurité informatique",
                    ],
                  },
                  {
                    icon: <RiFilePaper2Line />,
                    title: "Certifications",
                    links: ["Certificats de cours", "Certifications gratuites"],
                  },
                ]}
              />

              {/* DROPDOWN 2 */}
              <DropdownItem
                label="Ressources"
                isOpen={openDropdown === "ressources"}
                onToggle={() => toggleDropdown("ressources")}
                groups={[
                  {
                    icon: <RiCodeLine />,
                    title: "Templates web",
                    links: ["Templates gratuits", "Templates premium"],
                  },
                  {
                    icon: <RiPenNibLine />,
                    title: "Designs",
                    links: [
                      "Designs web",
                      "Designs mobile",
                      "Designs composants",
                    ],
                  },
                  {
                    icon: <RiApps2Line />,
                    title: "Autres",
                    links: [
                      "Articles récents",
                      "Vidéos tutorielles",
                      "Webinaires",
                    ],
                  },
                ]}
              />

              <li>
                <a href="#" className="nav5__link">
                  Tarifs
                </a>
              </li>

              {/* DROPDOWN 3 */}
              <DropdownItem
                label="Entreprise"
                isOpen={openDropdown === "entreprise"}
                onToggle={() => toggleDropdown("entreprise")}
                groups={[
                  {
                    icon: <RiCommunityLine />,
                    title: "À propos",
                    links: ["Qui sommes-nous", "Support", "Contact"],
                  },
                  {
                    icon: <RiShieldLine />,
                    title: "Sécurité & qualité",
                    links: ["Cookies", "Confidentialité"],
                  },
                ]}
              />
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarMenu2;
