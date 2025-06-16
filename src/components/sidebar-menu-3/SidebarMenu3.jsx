import { useState } from "react";
import {
  RiAccountBoxLine,
  RiDashboard3Line,
  RiFileList3Line,
  RiRocketLine,
  RiSettings3Line,
} from "react-icons/ri";
import "./sidebarMenu3.css";

const SidebarMenu3 = () => {
  const [activeLink, setActiveLink] = useState("accueil");

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="nav9__body">
      <nav className="nav9">
        <ul className="nav9__list">
          <li>
            <a
              href="#"
              className={`nav9__link ${
                activeLink === "accueil" ? "nav9__active-link" : ""
              }`}
              onClick={() => handleClick("accueil")}>
              <RiDashboard3Line />
              <span className="nav9__name">Accueil</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`nav9__link ${
                activeLink === "comptes" ? "nav9__active-link" : ""
              }`}
              onClick={() => handleClick("comptes")}>
              <RiAccountBoxLine />
              <span className="nav9__name">Comptes</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`nav9__link ${
                activeLink === "investissements" ? "nav9__active-link" : ""
              }`}
              onClick={() => handleClick("investissements")}>
              <RiRocketLine />
              <span className="nav9__name">Investissements</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`nav9__link ${
                activeLink === "fichiers" ? "nav9__active-link" : ""
              }`}
              onClick={() => handleClick("fichiers")}>
              <RiFileList3Line />
              <span className="nav9__name">Fichiers</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`nav9__link ${
                activeLink === "parametres" ? "nav9__active-link" : ""
              }`}
              onClick={() => handleClick("parametres")}>
              <RiSettings3Line />
              <span className="nav9__name">Paramètres</span>
            </a>
          </li>
        </ul>

        <div className="nav9__circle-1"></div>
        <div className="nav9__circle-2"></div>
        <div className="nav9__square-1"></div>
        <div className="nav9__square-2"></div>
      </nav>

      <main className="nav9__main">
        <h2>Composants</h2>
      </main>
    </div>
  );
};

export default SidebarMenu3;
