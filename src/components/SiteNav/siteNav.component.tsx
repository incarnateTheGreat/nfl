import { useState } from "react";

const SiteNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const Menu = () => {
    return (
      <ul>
        <li title="NFL" className="selected">
          NFL
        </li>
        <li title="NFL">NHL</li>
        <li title="NBA">NBA</li>
        <li title="Soccer">Soccer</li>
        <li title="NCAAF">NCAAF</li>
        <li title="Wiffle Ball">Wiffle Ball</li>
        <li title="Lawn Darts">Lawn Darts</li>
        <li title="Square Dancing">Square Dancing</li>
      </ul>
    );
  };

  return (
    <>
      <nav className="siteNav">
        <Menu />
      </nav>
      <span
        className="siteNav-mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <nav
        className={`siteNav siteNav-mobile ${isMobileMenuOpen ? "--open" : ""}`}
      >
        <Menu />
      </nav>
    </>
  );
};

export default SiteNav;
