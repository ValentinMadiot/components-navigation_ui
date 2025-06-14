import { useEffect, useRef, useState } from "react";
import {
  IoChatbubblesOutline,
  IoChevronDownOutline,
  IoFolderOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoMenuOutline,
  IoPeopleOutline,
  IoPieChartOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import "./sidebarMenu1.css";

const SidebarMenu1 = () => {
  const [estOuvert, setEstOuvert] = useState(true);
  const [lienActif, setLienActif] = useState("dashboard");
  const [menuOuvert, setMenuOuvert] = useState(null);
  const refSidebar = useRef(null);

  // Fermer la sidebar en cliquant à l’extérieur
  useEffect(() => {
    const gererClicExterieur = (e) => {
      if (refSidebar.current && !refSidebar.current.contains(e.target)) {
        setEstOuvert(false);
        setMenuOuvert(null);
      }
    };
    document.addEventListener("mousedown", gererClicExterieur);
    return () => document.removeEventListener("mousedown", gererClicExterieur);
  }, []);

  // Gérer les clics sur les liens principaux
  const gererClicLien = (id) => {
    setLienActif(id);
    setMenuOuvert(null); // Fermer tous les sous-menus ouverts
  };

  // Gérer les clics sur les sous-liens
  const gererClicSousLien = (sousId, parentId) => {
    setLienActif(parentId); // Le parent reste actif
    setMenuOuvert(null); // Fermer le sous-menu
  };

  // Gérer les clics sur les menus déroulants
  const gererToggleMenu = (idMenu) => {
    setLienActif(idMenu);
    if (!estOuvert) return; // Ne pas dérouler si la sidebar est fermée
    setMenuOuvert((prev) => (prev === idMenu ? null : idMenu));
  };

  return (
    <div id="nav7__body" className={estOuvert ? "nav7__body" : ""}>
      <div
        className={`nav7 ${estOuvert ? "expander" : ""}`}
        id="navbar"
        ref={refSidebar}>
        <nav className="nav7__container">
          <div>
            <div
              className="nav7__brand"
              onClick={() => setEstOuvert(!estOuvert)}>
              <span id="nav-toggle" className="nav7__toggle">
                <IoMenuOutline />
              </span>
              <a href="#" className="nav7__logo">
                Logo
              </a>
            </div>

            <div className="nav7__list">
              <a
                href="#"
                className={`nav7__link ${
                  lienActif === "dashboard" ? "active" : ""
                }`}
                onClick={() => gererClicLien("dashboard")}>
                <IoHomeOutline className="nav7__icon" />
                <span className="nav7__name">Accueil</span>
              </a>

              <a
                href="#"
                className={`nav7__link ${
                  lienActif === "messenger" ? "active" : ""
                }`}
                onClick={() => gererClicLien("messenger")}>
                <IoChatbubblesOutline className="nav7__icon" />
                <span className="nav7__name">Messagerie</span>
              </a>

              <div
                className={`nav7__link collapse ${
                  lienActif === "projects" ? "active" : ""
                }`}
                onClick={() => gererToggleMenu("projects")}>
                <IoFolderOutline className="nav7__icon" />
                <span className="nav7__name">Projets</span>
                <IoChevronDownOutline
                  className={`nav7__collapse-link ${
                    menuOuvert === "projects" ? "rotate" : ""
                  }`}
                />
                <ul
                  className={`nav7__collapse-menu ${
                    menuOuvert === "projects" ? "showCollapse" : ""
                  }`}>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() =>
                        gererClicSousLien("projects-data", "projects")
                      }>
                      Données
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() =>
                        gererClicSousLien("projects-group", "projects")
                      }>
                      Groupe
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() =>
                        gererClicSousLien("projects-members", "projects")
                      }>
                      Membres
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href="#"
                className={`nav7__link ${
                  lienActif === "analytics" ? "active" : ""
                }`}
                onClick={() => gererClicLien("analytics")}>
                <IoPieChartOutline className="nav7__icon" />
                <span className="nav7__name">Statistiques</span>
              </a>

              <div
                className={`nav7__link collapse ${
                  lienActif === "team" ? "active" : ""
                }`}
                onClick={() => gererToggleMenu("team")}>
                <IoPeopleOutline className="nav7__icon" />
                <span className="nav7__name">Équipe</span>
                <IoChevronDownOutline
                  className={`nav7__collapse-link ${
                    menuOuvert === "team" ? "rotate" : ""
                  }`}
                />
                <ul
                  className={`nav7__collapse-menu ${
                    menuOuvert === "team" ? "showCollapse" : ""
                  }`}>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() => gererClicSousLien("team-data", "team")}>
                      Données
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() => gererClicSousLien("team-group", "team")}>
                      Groupe
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="nav7__collapse-sublink"
                      onClick={() => gererClicSousLien("team-members", "team")}>
                      Membres
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href="#"
                className={`nav7__link ${
                  lienActif === "settings" ? "active" : ""
                }`}
                onClick={() => gererClicLien("settings")}>
                <IoSettingsOutline className="nav7__icon" />
                <span className="nav7__name">Paramètres</span>
              </a>
            </div>
          </div>

          <a
            href="#"
            className={`nav7__link ${lienActif === "logout" ? "active" : ""}`}
            onClick={() => gererClicLien("logout")}>
            <IoLogOutOutline className="nav7__icon" />
            <span className="nav7__name">Déconnexion</span>
          </a>
        </nav>
      </div>
      <h1>Components</h1>
    </div>
  );
};

export default SidebarMenu1;
