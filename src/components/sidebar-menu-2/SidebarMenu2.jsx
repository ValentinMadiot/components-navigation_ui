import { useEffect, useRef, useState } from "react";
import {
  BiBell,
  BiBookmark,
  BiChevronDown,
  BiCompass,
  BiDisc,
  BiHome,
  BiLogOut,
  BiMenu,
  BiMessageRounded,
  BiSearch,
  BiUser,
  BiX,
} from "react-icons/bi";
import profil from "./assets/img/profil.jpg";
import "./sidebarMenu2.css";

const SidebarMenu2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("accueil");
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Fermer la sidebar mobile si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
    setActiveLink(id);
  };

  return (
    <div className="nav8__body">
      {/* ====== HEADER ====== */}
      <header className="nav8__header">
        <div className="nav8__header-container">
          <img src={profil} alt="Profil" className="nav8__header-img" />

          <a href="#" className="nav8__header-logo">
            Logo
          </a>

          <div className="nav8__header-search">
            <input
              type="search"
              placeholder="Rechercher"
              className="nav8__header-input"
            />
            <BiSearch className="nav8__header-icon" />
          </div>

          <span
            id="header-toggle"
            onClick={() => setShowMenu(!showMenu)}
            className="nav8__header-toggle">
            {showMenu ? (
              <BiX className="icon-toggle" />
            ) : (
              <BiMenu className="icon-toggle" />
            )}
          </span>
        </div>
      </header>

      {/* ====== NAVIGATION ====== */}
      <div
        className={`nav8 ${showMenu ? "show-menu" : ""}`}
        id="navbar"
        ref={navbarRef}>
        <nav className="nav8__container">
          <div>
            <a href="#" className="nav8__link nav8__logo">
              <BiDisc className="nav8__icon" />
              <span className="nav8__logo-name">Logo</span>
            </a>

            <div className="nav8__list">
              <div className="nav8__items">
                <h3 className="nav8__subtitle">Profil</h3>

                <a
                  href="#"
                  className={`nav8__link ${
                    activeLink === "accueil" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("accueil")}>
                  <BiHome className="nav8__icon" />
                  <span className="nav8__name">Accueil</span>
                </a>

                <div className="nav8__dropdown">
                  <a
                    href="#"
                    className={`nav8__link ${
                      activeLink === "profil" ? "active" : ""
                    }`}
                    onClick={() => handleDropdownToggle("profil")}>
                    <BiUser className="nav8__icon" />
                    <span className="nav8__name">Profil</span>
                    <BiChevronDown className="nav8__icon nav8__dropdown-icon" />
                  </a>

                  <div
                    className={`nav8__dropdown-collapse ${
                      openDropdown === "profil" ? "show" : ""
                    }`}>
                    <div className="nav8__dropdown-content">
                      <a href="#" className="nav8__dropdown-item">
                        Sécurité
                      </a>
                      <a href="#" className="nav8__dropdown-item">
                        Courrier
                      </a>
                      <a href="#" className="nav8__dropdown-item">
                        Comptes
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className={`nav8__link ${
                    activeLink === "messages" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("messages")}>
                  <BiMessageRounded className="nav8__icon" />
                  <span className="nav8__name">Messages</span>
                </a>
              </div>

              <div className="nav8__items">
                <h3 className="nav8__subtitle">Menu</h3>

                <div className="nav8__dropdown">
                  <a
                    href="#"
                    className={`nav8__link ${
                      activeLink === "notifications" ? "active" : ""
                    }`}
                    onClick={() => handleDropdownToggle("notifications")}>
                    <BiBell className="nav8__icon" />
                    <span className="nav8__name">Notifications</span>
                    <BiChevronDown className="nav8__icon nav8__dropdown-icon" />
                  </a>

                  <div
                    className={`nav8__dropdown-collapse ${
                      openDropdown === "notifications" ? "show" : ""
                    }`}>
                    <div className="nav8__dropdown-content">
                      <a href="#" className="nav8__dropdown-item">
                        Bloqués
                      </a>
                      <a href="#" className="nav8__dropdown-item">
                        Silencieux
                      </a>
                      <a href="#" className="nav8__dropdown-item">
                        Publier
                      </a>
                      <a href="#" className="nav8__dropdown-item">
                        Programme
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className={`nav8__link ${
                    activeLink === "explorer" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("explorer")}>
                  <BiCompass className="nav8__icon" />
                  <span className="nav8__name">Explorer</span>
                </a>

                <a
                  href="#"
                  className={`nav8__link ${
                    activeLink === "enregistres" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("enregistres")}>
                  <BiBookmark className="nav8__icon" />
                  <span className="nav8__name">Enregistrés</span>
                </a>
              </div>
            </div>
          </div>

          <a
            href="#"
            className={`nav8__link nav8__logout ${
              activeLink === "deconnexion" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("deconnexion")}>
            <BiLogOut className="nav8__icon" />
            <span className="nav8__name">Déconnexion</span>
          </a>
        </nav>
      </div>

      {/* ====== CONTENU PRINCIPAL ====== */}
      <main>
        <section>
          <p className="nav8__main-p">Retour</p>
        </section>
      </main>
    </div>
  );
};

export default SidebarMenu2;
