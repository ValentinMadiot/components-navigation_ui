import { useEffect } from "react";
import {
  RiBook2Line,
  RiBriefcase2Line,
  RiHome2Line,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
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

  const navItems = [
    { id: "accueil", label: "Accueil", icon: <RiHome2Line /> },
    { id: "profil", label: "Profil", icon: <RiUserLine /> },
    { id: "atouts", label: "Atouts", icon: <RiBook2Line /> },
    { id: "projets", label: "Projets", icon: <RiBriefcase2Line /> },
    { id: "contact", label: "Contact", icon: <RiMailLine /> },
  ];

  return (
    <div className="nav2__body">
      <header className="nav2__header" id="header">
        <nav className="nav2 nav2__container">
          <a href="#" className="nav2__logo">
            Valentin
          </a>

          <div className="nav2__menu" id="nav-menu">
            <ul className="nav2__list">
              {navItems.map((item) => (
                <li className="nav2__item" key={item.id}>
                  <a href={`#${item.id}`} className="nav2__link">
                    <span className="nav2__icon">{item.icon}</span>
                    <span className="nav2__name">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img src={profileImage} alt="Profile" className="nav2__img" />
        </nav>
      </header>

      <main>
        {navItems.map((section) => (
          <section
            className="nav2__container nav2__section nav2__height"
            id={section.id}
            key={section.id}>
            <h2 className="nav2__title">{section.label}</h2>
          </section>
        ))}
      </main>
    </div>
  );
};

export default BottomNavbar2;
