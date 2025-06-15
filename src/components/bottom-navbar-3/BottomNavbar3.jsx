import { useEffect, useRef } from "react";
import {
  RiArrowRightSLine,
  RiBarChart2Line,
  RiFileList2Line,
  RiHeartFill,
  RiLayoutGridLine,
  RiMailLine,
  RiSettings3Line,
} from "react-icons/ri";
import "./bottomNavbar3.css";

const BottomNavbar3 = () => {
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const linksRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const toggle = toggleRef.current;
    const nav = navRef.current;

    if (toggle && nav) {
      const handleToggle = () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("rotate-icon");
      };
      toggle.addEventListener("click", handleToggle);
      return () => toggle.removeEventListener("click", handleToggle);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      { root: null, rootMargin: "0px", threshold: 0.75 }
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
    { id: "Accueil", icon: <RiLayoutGridLine />, label: "Accueil" },
    { id: "Agenda", icon: <RiFileList2Line />, label: "Agenda" },
    { id: "Messages", icon: <RiMailLine />, label: "Messages" },
    { id: "Stats", icon: <RiBarChart2Line />, label: "Stats" },
    { id: "Réglages", icon: <RiSettings3Line />, label: "Réglages" },
  ];

  return (
    <div className="nav3__body">
      <div className="nav3" ref={navRef}>
        <nav className="nav3__content">
          <div className="nav3__toggle" ref={toggleRef}>
            <RiArrowRightSLine />
          </div>

          <a href="#" className="nav3__logo">
            <RiHeartFill />
            <span className="nav3__logo-name">Logo</span>
          </a>

          <div className="nav3__list">
            {sections.map((item, index) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className="nav3__link"
                ref={(el) => (linksRef.current[index] = el)}>
                {item.icon}
                <span className="nav3__name">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

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
