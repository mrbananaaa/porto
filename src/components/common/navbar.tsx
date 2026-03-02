import { useEffect, useState } from "react";

const NAVIGATION_LIST = [
  ["About", "about"],
  ["Skill", "skill"],
  ["Showcase", "showcase"],
  ["Contact", "contact"],
] as const;

const scrollToSection = (sectionID: string) => {
  window.history.pushState(null, "", `#${sectionID}`);

  const elm = document.getElementById(sectionID);
  if (elm) {
    elm.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLogo = () => {
  return (
    <a
      href="/"
      className="flex flex-col -space-y-2 md:-space-y-3 font-semibold md:text-xl"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        window.history.pushState(null, "", "/");
      }}
    >
      <span>mr.</span>
      <span className="text-accent">bananaaa</span>
    </a>
  );
};

const Nav = () => {
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex space-x-8 text-sm font-head-main">
      {NAVIGATION_LIST.map(([title, section], i) => (
        <a
          key={i}
          href={`#${section}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section);
          }}
          className={
            activeSection === section
              ? "text-accent font-medium"
              : "text-fg-sec"
          }
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background-light/70 backdrop-blur-sm flex justify-center">
      <div className="w-full py-4 flex justify-between items-center font-head-main md:px-8 lg:px-0 lg:max-w-4xl xl:max-w-6xl">
        <NavLogo />
        <Nav />
      </div>
    </div>
  );
};
