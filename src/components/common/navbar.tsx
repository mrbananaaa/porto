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
    <div className="sticky top-0 z-50 bg-background-light/70 backdrop-blur-sm flex justify-center">
      <div className="w-full py-4 flex justify-between items-center font-head-main md:px-8 lg:px-0 lg:max-w-4xl xl:max-w-6xl">
        <NavLogo />
        <Nav />
      </div>
    </div>
  );
};
