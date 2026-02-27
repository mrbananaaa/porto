const NAVIGATION_LIST = [
  ["About", "#"],
  ["Skill", "#"],
  ["Showcase", "#"],
  ["Contact", "#"],
] as const;

const NavLogo = () => {
  return (
    <a
      href="#"
      className="flex flex-col -space-y-2 md:-space-y-3 font-semibold md:text-xl"
    >
      <span>mr.</span>
      <span className="text-accent">bananaaa</span>
    </a>
  );
};

const Nav = () => {
  return (
    <nav className="hidden md:flex space-x-8 text-sm">
      {NAVIGATION_LIST.map(([title, link], i) => (
        <a key={i} href={link}>
          {title}
        </a>
      ))}
    </nav>
  );
};

export const Navbar = () => {
  return (
    <div className="py-4 flex justify-between items-center font-head-main">
      <NavLogo />
      <Nav />
    </div>
  );
};
