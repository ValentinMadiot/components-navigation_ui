import { useEffect, useRef } from "react";
import "./bottomNavbar3.css";

const BottomNavbar3 = () => {
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const linksRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // MENU TOGGLE
    const toggle = toggleRef.current;
    const nav = navRef.current;

    if (toggle && nav) {
      const handleToggle = () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("rotate-icon");
      };
      toggle.addEventListener("click", handleToggle);

      return () => {
        toggle.removeEventListener("click", handleToggle);
      };
    }
  }, []);

  useEffect(() => {
    // ACTIVE SECTION OBSERVER
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75, // 75% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          linksRef.current.forEach((link) => {
            link.classList.remove("active-link");
            if (link.getAttribute("href") === `#${activeId}`) {
              link.classList.add("active-link");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const sections = [
    { id: "Accueil", icon: "bx-grid-alt", label: "Accueil" },
    { id: "Agenda", icon: "bx-file", label: "Agenda" },
    { id: "Messages", icon: "bx-envelope", label: "Messages" },
    { id: "Stats", icon: "bx-bar-chart-square", label: "Stats" },
    { id: "Réglages", icon: "bx-cog", label: "Réglages" },
  ];

  return (
    <div className="nav3__body">
      {/* NAVBAR */}
      <div className="nav3" ref={navRef}>
        <nav className="nav3__content">
          <div className="nav3__toggle" ref={toggleRef}>
            <i className="bx bx-chevron-right"></i>
          </div>

          <a href="#" className="nav3__logo">
            <i className="bx bxs-heart"></i>
            <span className="nav3__logo-name">Logo</span>
          </a>

          <div className="nav3__list">
            {sections.map((item, index) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className="nav3__link"
                ref={(el) => (linksRef.current[index] = el)}>
                <i className={`bx ${item.icon}`}></i>
                <span className="nav3__name">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* MAIN */}
      <main>
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="nav3__container nav3__section nav3__height"
            ref={(el) => (sectionsRef.current[index] = el)}>
            <h2 className="nav3__title">{section.label}</h2>
          </section>
        ))}
      </main>
    </div>
  );
};

export default BottomNavbar3;
