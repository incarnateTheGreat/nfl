import SiteNav from "../SiteNav/siteNav.component";

const SiteHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo" />
        <SiteNav />
      </div>
    </header>
  );
};

export default SiteHeader;
