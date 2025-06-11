import { useEffect, useState } from "react";
import "./navbarMenu2.css";

const NavbarMenu2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Ferme tous les dropdowns si la fenêtre est redimensionnée en desktop
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
    <li className={`nav5__dropdown-item ${isOpen ? "show-dropdown" : ""}`}>
      <div className="nav5__link nav5__dropdown-button" onClick={onToggle}>
        {label} <i className="ri-arrow-down-s-line nav5__dropdown-arrow"></i>
      </div>
      <div
        className="nav5__dropdown-container"
        style={{ height: isOpen ? "auto" : undefined }}>
        <div className="nav5__dropdown-content">
          {groups.map((group, index) => (
            <div className="nav5__dropdown-group" key={index}>
              <div className="nav5__dropdown-icon">
                <i className={group.icon}></i>
              </div>
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
              <i className="ri-code-s-slash-line"></i> Logo
            </a>

            <div
              className={`nav5__toggle ${menuOpen ? "show-icon" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <i className="ri-menu-line nav5__toggle-menu"></i>
              <i className="ri-close-line nav5__toggle-close"></i>
            </div>
          </div>

          <div className={`nav5__menu ${menuOpen ? "show-menu" : ""}`}>
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
                    icon: "ri-flashlight-line",
                    title: "Cours les plus vus",
                    links: [
                      "HTML pour débutants",
                      "CSS avancé",
                      "JavaScript orienté objet",
                    ],
                  },
                  {
                    icon: "ri-heart-3-line",
                    title: "Cours populaires",
                    links: [
                      "Développement avec Flutter",
                      "Développement Web avec React",
                      "Expert back-end",
                    ],
                  },
                  {
                    icon: "ri-book-mark-line",
                    title: "Métiers",
                    links: [
                      "Développement Web",
                      "Développement d'apps",
                      "Design UI/UX",
                      "Sécurité informatique",
                    ],
                  },
                  {
                    icon: "ri-file-paper-2-line",
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
                    icon: "ri-code-line",
                    title: "Templates web",
                    links: ["Templates gratuits", "Templates premium"],
                  },
                  {
                    icon: "ri-pen-nib-line",
                    title: "Designs",
                    links: [
                      "Designs web",
                      "Designs mobile",
                      "Designs composants",
                    ],
                  },
                  {
                    icon: "ri-apps-2-line",
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
                    icon: "ri-community-line",
                    title: "À propos",
                    links: ["Qui sommes-nous", "Support", "Contact"],
                  },
                  {
                    icon: "ri-shield-line",
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
