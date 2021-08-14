import { useEffect, useState } from "react";
import useRushing from "hooks/useRushing";
import { RushingDataServerResponse } from "interfaces/interface";
import Pagination from "components/Pagination/pagination.component";
import Filters from "components/Filters/filters.component";
import Spinner from "components/Spinner/spinner.component";
import { assignSelectedColumnClass } from "utils/utils";
import { ERRORS, TABLE } from "utils/messages";

const Rushing = () => {
  const ascArrow = "▲";
  const downArrow = "▼";
  const repoName = "nflRushingRepo";
  const [playersPerPage, setPlayersPerPage] = useState<number>(25);
  const [sortDirection, setSortDirection] = useState<string>("ASC");
  const [selectedSortColumn, setSelectedSortColumn] = useState<string | null>(
    "Player"
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");
  const [URLParams, setURLParams] = useState<Record<string, unknown>>({
    _page: 1,
    _limit: playersPerPage,
    _sort: "Player",
  });
  const [rushingDataRes, setRushingDataRes] =
    useState<RushingDataServerResponse>();
  const { isLoading } = useRushing(repoName, URLParams, setRushingDataRes);

  // Clear and reset all filters and sortables to their initial state.
  const clearFilters = () => {
    setSortDirection("");
    setSelectedSortColumn("Player");
    setPageNumber(1);
    setPlayersPerPage(25);
    setSearchInput("");
  };

  // Apply the sort arrow and set its direction when sorting a column.
  const assignSortArrow = (col) => {
    if (selectedSortColumn === col) {
      return sortDirection === "ASC" ? ascArrow : downArrow;
    }

    return null;
  };

  // Update Url parameters for search.
  const updateUrlParams = (queryParams) => {
    setURLParams((prevState) => {
      const sortStateToUpdate = queryParams;

      return { ...prevState, ...sortStateToUpdate };
    });
  };

  // Sort selected data data either ascending or descending.
  const sortData = (col: string) => {
    const newSortDirection = sortDirection === "ASC" ? "DESC" : "ASC";

    setSortDirection(newSortDirection);
    setSelectedSortColumn(col);
    updateUrlParams({ _sort: col, _order: newSortDirection });
  };

  // Listners for Page number, Players per page, search input, selected column, and sort direction.
  useEffect(() => {
    updateUrlParams({ _page: pageNumber });
  }, [pageNumber]);

  useEffect(() => {
    updateUrlParams({ _limit: playersPerPage });
  }, [playersPerPage]);

  useEffect(() => {
    updateUrlParams({ [`Player_like`]: searchInput, _page: 1 });
  }, [searchInput]);

  useEffect(() => {
    updateUrlParams({ _sort: selectedSortColumn });
  }, [selectedSortColumn]);

  useEffect(() => {
    updateUrlParams({ _order: sortDirection });
  }, [sortDirection]);

  return (
    <article className="rushing">
      <Filters
        clearFilters={clearFilters}
        data={rushingDataRes?.data}
        searchInput={searchInput}
        setPlayersPerPage={setPlayersPerPage}
        playersPerPage={playersPerPage}
        setSearchInput={setSearchInput}
        setPageNumber={setPageNumber}
      />

      {isLoading && <Spinner position="floatCenter" />}

      {!isLoading && rushingDataRes?.data.length > 0 && (
        <div className="rushing-container">
          {rushingDataRes?.data.length > 0 && (
            <Pagination
              data={rushingDataRes}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          )}

          <div className="rushing-table-container">
            <table className="rushing-table">
              <thead>
                <tr>
                  <th title={TABLE.PLAYER_DESC}>{TABLE.PLAYER}</th>
                  <th title={TABLE.TEAM_DESC}>{TABLE.TEAM}</th>
                  <th title={TABLE.POS_DESC}>{TABLE.POS}</th>
                  <th title={TABLE.ATT_DESC}>{TABLE.ATT}</th>
                  <th title={TABLE.ATT_G_DESC}>{TABLE.ATT_G}</th>
                  <th
                    title={TABLE.YDS_DESC}
                    className={`${assignSelectedColumnClass(
                      selectedSortColumn,
                      TABLE.YDS_KEY
                    )} sortableHeader`}
                    onClick={() => sortData(TABLE.YDS_KEY)}
                  >
                    <div>
                      <span>{TABLE.YDS}</span>
                      <span>{assignSortArrow(TABLE.YDS_KEY)}</span>
                    </div>
                  </th>
                  <th title={TABLE.AVG_DESC}>{TABLE.AVG}</th>
                  <th title={TABLE.YDS_G_DESC}>{TABLE.YDS_G}</th>
                  <th
                    title={TABLE.TD_DESC}
                    className={`${assignSelectedColumnClass(
                      selectedSortColumn,
                      TABLE.TD_KEY
                    )} sortableHeader`}
                    onClick={() => sortData(TABLE.TD_KEY)}
                  >
                    <div>
                      <span>{TABLE.TD}</span>
                      <span>{assignSortArrow(TABLE.TD_KEY)}</span>
                    </div>
                  </th>
                  <th
                    title={TABLE.LNG_DESC}
                    className={`${assignSelectedColumnClass(
                      selectedSortColumn,
                      TABLE.LNG_KEY
                    )} sortableHeader`}
                    onClick={() => sortData(TABLE.LNG_KEY)}
                  >
                    <div>
                      <span>{TABLE.LNG}</span>
                      <span>{assignSortArrow(TABLE.LNG_KEY)}</span>
                    </div>
                  </th>
                  <th title={TABLE.FIRST_DESC}>{TABLE.FIRST}</th>
                  <th title={TABLE.FIRST_PERCENTAGE_DESC}>
                    {TABLE.FIRST_PERCENTAGE}
                  </th>
                  <th title={TABLE.TWENTY_PLUS_DESC}>{TABLE.TWENTY_PLUS}</th>
                  <th title={TABLE.FORTY_PLUS_DESC}>{TABLE.FORTY_PLUS}</th>
                  <th title={TABLE.FUM_DESC}>{TABLE.FUM}</th>
                </tr>
              </thead>
              <tbody>
                {rushingDataRes?.data.map((player, key) => {
                  const { Player, Team, Pos, Att, Yds, Avg, TD, Lng, FUM } =
                    player;

                  return (
                    <tr key={key}>
                      <td>{Player}</td>
                      <td>{Team}</td>
                      <td>{Pos}</td>
                      <td>{Att}</td>
                      <td>{player["Att/G"]}</td>
                      <td
                        className={`${assignSelectedColumnClass(
                          selectedSortColumn,
                          TABLE.YDS_KEY
                        )}`}
                      >
                        {Yds}
                      </td>
                      <td>{Avg}</td>
                      <td>{player["Yds/G"]}</td>
                      <td
                        className={`${assignSelectedColumnClass(
                          selectedSortColumn,
                          TABLE.TD_KEY
                        )}`}
                      >
                        {TD}
                      </td>
                      <td
                        className={`${assignSelectedColumnClass(
                          selectedSortColumn,
                          TABLE.LNG_KEY
                        )}`}
                      >
                        {Lng}
                      </td>
                      <td>{player["1st"]}</td>
                      <td>{player["1st%"]}</td>
                      <td>{player["20+"]}</td>
                      <td>{player["40+"]}</td>
                      <td>{FUM}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {rushingDataRes?.data.length > 0 && (
            <Pagination
              data={rushingDataRes}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          )}
        </div>
      )}

      {!isLoading && rushingDataRes?.data.length === 0 && (
        <div className="rushing-container-error">{ERRORS.NO_RESULTS}</div>
      )}
    </article>
  );
};

export default Rushing;
