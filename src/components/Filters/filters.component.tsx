import { useCallback } from "react";
import { CSVLink } from "react-csv";
import debounce from "lodash.debounce";
import { FILTERS, TABLE } from "utils/messages";

const headers = [
  { label: TABLE.PLAYER, key: TABLE.PLAYER_KEY },
  { label: TABLE.TEAM, key: TABLE.TEAM_KEY },
  { label: TABLE.POS, key: TABLE.POS_KEY },
  { label: TABLE.ATT, key: TABLE.ATT_KEY },
  { label: TABLE.ATT_G, key: TABLE.ATT_G_KEY },
  {
    label: TABLE.YDS,
    key: TABLE.YDS_KEY,
  },
  { label: TABLE.AVG, key: TABLE.AVG_KEY },
  { label: TABLE.YDS_G, key: TABLE.YDS_G_KEY },
  { label: TABLE.TD, key: TABLE.TD_KEY },
  { label: TABLE.LNG, key: TABLE.LNG_KEY },
  { label: TABLE.FIRST, key: TABLE.FIRST_KEY },
  { label: TABLE.FIRST_PERCENTAGE, key: TABLE.FIRST_PERCENTAGE_KEY },
  { label: TABLE.TWENTY_PLUS, key: TABLE.TWENTY_PLUS_KEY },
  { label: TABLE.FORTY_PLUS, key: TABLE.FORTY_PLUS_KEY },
  { label: TABLE.FUM, key: TABLE.FUM_KEY },
];

const Filters = ({
  clearFilters,
  data,
  setPlayersPerPage,
  playersPerPage,
  setSearchInput,
  searchInput,
  setPageNumber,
}) => {
  const handleSearchInput = (searchString) => {
    // When the search input is cleared, go to the first page.
    if (searchString.length === 0) {
      setPageNumber(1);
    }
  };

  // Fire the search input function after a short frame of time to prevent multiple data calls and collisions.
  const debounceSearchInputHandler = useCallback(
    debounce(handleSearchInput, 500),
    ["Player"]
  );

  return (
    <div className="filter-container">
      <div className="filter-container-filters">
        <div className="filter-container-filters-container">
          <div className="filter-container-filters-excel">
            <label htmlFor="download_csv">{FILTERS.DOWNLOAD_CSV}</label>
            {data?.length > 0 && (
              <CSVLink
                className={"filter-container-filters-excel-icon"}
                data={data}
                headers={headers}
                title={FILTERS.DOWNLOAD_CSV}
              >
                <img src="../icons/excel-icon.png" alt={FILTERS.DOWNLOAD_CSV} />
              </CSVLink>
            )}
          </div>
          <div>
            <label htmlFor="players-per-page">{FILTERS.PLAYERS_PER_PAGE}</label>
            <select
              data-testid="filter-players-per-page"
              name="players-per-page"
              id="players-per-page"
              onChange={(e) => {
                setPlayersPerPage(+e.target.value);
                setPageNumber(1);
              }}
              value={playersPerPage}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-by">{FILTERS.FILTER_BY_NAME}</label>
            <input
              data-testid="filter-search-input"
              type="search"
              placeholder={FILTERS.SEARCH_BY_PLAYER}
              value={searchInput}
              onChange={(e) => {
                debounceSearchInputHandler(e.target.value);
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="border"
          type="button"
          title={FILTERS.CLEAR_ALL_FILTERS}
          onClick={() => clearFilters()}
        >
          {FILTERS.CLEAR_ALL_FILTERS}
        </button>
      </div>
    </div>
  );
};

export default Filters;
