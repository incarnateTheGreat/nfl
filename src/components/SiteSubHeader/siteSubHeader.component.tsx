const SiteSubHeader = () => {
  return (
    <nav className="siteSubNav">
      <div className="siteSubNav-container">
        <span className="siteSubNav-container-selectedCategory">NFL</span>
        <span className="siteSubNav-container-divider">|</span>
        <ul>
          <li>Scores</li>
          <li>Standings</li>
          <li className="selected">Stats</li>
          <li>Teams</li>
        </ul>
      </div>
    </nav>
  );
};

export default SiteSubHeader;
