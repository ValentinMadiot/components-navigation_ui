import { useEffect, useState } from "react";
import { background } from "./assets/img/index";

const SECTIONS = [
  { id: "accueil", label: "Accueil" },
  { id: "profil", label: "À Propos" },
  { id: "atouts", label: "Services" },
  { id: "contact", label: "Contact" },
];

const NavbarMenu3 = ({ onOpenLogin, onOpenSearch }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      SECTIONS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav6__body">
      <header className="nav6__header">
        <nav className="nav6 nav6__container">
          <a href="#" className="nav6__logo">
            Logo
          </a>

          <div className={`nav6__menu ${menuVisible ? "show-menu" : ""}`}>
            <ul className="nav6__list">
              {SECTIONS.map(({ id, label }) => (
                <li className="nav6__item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav6__link ${
                      activeLink === id ? "active-link" : ""
                    }`}
                    onClick={() => setMenuVisible(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav6__close" onClick={() => setMenuVisible(false)}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav6__actions">
            <i
              className="ri-search-line nav6__btn-search"
              onClick={onOpenSearch}></i>
            <i
              className="ri-user-line nav6__btn-login"
              onClick={onOpenLogin}></i>
            <div className="nav6__toggle" onClick={() => setMenuVisible(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="nav6__main">
        <img src={background} alt="background" className="nav6__main-bg" />
        {SECTIONS.map(({ id, label }) => (
          <section
            className="nav6__container nav6__section nav6__height"
            id={id}
            key={id}>
            <h2 className="nav6__title">{label}</h2>
          </section>
        ))}
      </main>
    </div>
  );
};

export default NavbarMenu3;
