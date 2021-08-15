const SiteNav = () => {
  return (
    <nav className="siteNav">
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
  );
};

export default SiteNav;
