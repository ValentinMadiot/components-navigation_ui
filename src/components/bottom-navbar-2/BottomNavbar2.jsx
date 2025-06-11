import { useEffect } from "react";
import profileImage from "./assets/img/profile.png";
import "./bottomNavbar2.css";

const BottomNavbar2 = () => {
  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(
          `.nav2__link[href="#${sectionId}"]`
        );

        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
          } else {
            navLink.classList.remove("active-link");
          }
        }
      });
    };

    const scrollHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", scrollActive);
    window.addEventListener("scroll", scrollHeader);

    scrollActive();
    scrollHeader();

    return () => {
      window.removeEventListener("scroll", scrollActive);
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div className="nav2__body">
      <header className="nav2__header" id="header">
        <nav className="nav2 nav2__container">
          <a href="#" className="nav2__logo">
            Valentin
          </a>

          <div className="nav2__menu" id="nav-menu">
            <ul className="nav2__list">
              {[
                { id: "accueil", icon: "bx-home-alt", label: "Accueil" },
                { id: "profil", icon: "bx-user", label: "Profil" },
                { id: "atouts", icon: "bx-book-alt", label: "Atouts" },
                {
                  id: "projets",
                  icon: "bx-briefcase-alt",
                  label: "Projets",
                },
                {
                  id: "contact",
                  icon: "bx-message-square-detail",
                  label: "Contact",
                },
              ].map((item) => (
                <li className="nav2__item" key={item.id}>
                  <a href={`#${item.id}`} className="nav2__link">
                    <i className={`bx ${item.icon} nav2__icon`}></i>
                    <span className="nav2__name">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img src={profileImage} alt="Profile" className="nav2__img" />
        </nav>
      </header>

      {/* MAIN */}
      <main>
        {["accueil", "profil", "atouts", "projets", "contact"].map(
          (section) => (
            <section
              className="nav2__container nav2__section nav2__height"
              id={section}
              key={section}>
              <h2 className="nav2__title">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
            </section>
          )
        )}
      </main>
    </div>
  );
};

export default BottomNavbar2;
