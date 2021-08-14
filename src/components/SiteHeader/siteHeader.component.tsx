const SiteHeader = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo" />
        <nav className="header-siteNav">
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
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
