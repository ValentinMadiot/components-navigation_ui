import { useEffect } from "react";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowUpDownLine,
  RiBarChartLine,
  RiCashLine,
  RiCloseLine,
  RiFileListLine,
  RiLockLine,
  RiMenuLine,
  RiMessage3Line,
  RiPieChartLine,
  RiPlanetLine,
  RiRefund2Line,
  RiUserLine,
} from "react-icons/ri";
import "./navbarMenu1.css";

const NavbarMenu1 = () => {
  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    const showMenu = () => {
      nav.classList.toggle("show-menu");
      toggle.classList.toggle("show-icon");
    };

    if (toggle) {
      toggle.addEventListener("click", showMenu);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showMenu);
      }
    };
  }, []);

  return (
    <div className="nav4__body">
      <header className="nav4__header">
        <nav className="nav4 nav4__container">
          <div className="nav4__data">
            <a href="#" className="nav4__logo">
              <RiPlanetLine /> Logo
            </a>

            <div className="nav4__toggle" id="nav-toggle">
              <RiMenuLine className="nav4__burger" />
              <RiCloseLine className="nav4__close" />
            </div>
          </div>

          <div className="nav4__menu" id="nav-menu">
            <ul className="nav4__list">
              <li>
                <a href="#" className="nav4__link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="nav4__link">
                  Logo
                </a>
              </li>

              {/* Dropdown 1 */}
              <li className="nav4__dropdown-item">
                <div className="nav4__link">
                  Statistiques{" "}
                  <RiArrowDownSLine className="nav4__dropdown-arrow" />
                </div>
                <ul className="nav4__dropdown-menu">
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <RiPieChartLine /> Aperçu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <RiArrowUpDownLine /> Transactions
                    </a>
                  </li>

                  {/* Submenu */}
                  <li className="nav4__dropdown-subitem">
                    <div className="nav4__dropdown-link">
                      <RiBarChartLine /> Rapports
                      <RiAddLine className="nav4__dropdown-add" />
                    </div>
                    <ul className="nav4__dropdown-submenu">
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <RiFileListLine /> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <RiCashLine /> Paiements
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <RiRefund2Line /> Remboursements
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="nav4__link">
                  Produits
                </a>
              </li>

              {/* Dropdown 2 */}
              <li className="nav4__dropdown-item">
                <div className="nav4__link">
                  Utilisateurs{" "}
                  <RiArrowDownSLine className="nav4__dropdown-arrow" />
                </div>
                <ul className="nav4__dropdown-menu">
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <RiUserLine /> Profils
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <RiLockLine /> Comptes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <RiMessage3Line /> Messages
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="nav4__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarMenu1;
