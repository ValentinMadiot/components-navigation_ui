import { useEffect } from "react";
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
              <i className="ri-planet-line"></i> Logo
            </a>

            <div className="nav4__toggle" id="nav-toggle">
              <i className="ri-menu-line nav4__burger"></i>
              <i className="ri-close-line nav4__close"></i>
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
                  <i className="ri-arrow-down-s-line nav4__dropdown-arrow"></i>
                </div>
                <ul className="nav4__dropdown-menu">
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <i className="ri-pie-chart-line"></i> Vue d'ensemble
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>

                  {/* Submenu */}
                  <li className="nav4__dropdown-subitem">
                    <div className="nav4__dropdown-link">
                      <i className="ri-bar-chart-line"></i> Rapports
                      <i className="ri-add-line nav4__dropdown-add"></i>
                    </div>
                    <ul className="nav4__dropdown-submenu">
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <i className="ri-cash-line"></i> Paiements
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav4__dropdown-sublink">
                          <i className="ri-refund-2-line"></i> Remboursements
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
                  <i className="ri-arrow-down-s-line nav4__dropdown-arrow"></i>
                </div>
                <ul className="nav4__dropdown-menu">
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <i className="ri-user-line"></i> Profils
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <i className="ri-lock-line"></i> Comptes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav4__dropdown-link">
                      <i className="ri-message-3-line"></i> Messages
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
