import { useEffect, useState } from "react";
import useRushing from "hooks/useRushing";
import { RushingDataServerResponse } from "interfaces/interface";
import Pagination from "components/Pagination/pagination.component";
import Filters from 'components/Filters/filters.component';
import Spinner from 'components/Spinner/spinner.component';
import { assignSelectedColumnClass } from "utils/utils";
import { ERRORS, TABLE } from "utils/messages";

const Rushing = () => {
  const ascArrow = "▲";
  const downArrow = "▼";
  const repoName = "nflRushingRepo";
  const [playersPerPage, setPlayersPerPage] = useState<number>(25);
  const [sortDirection, setSortDirection] = useState<string>("ASC");
  const [selectedSortColumn, setSelectedSortColumn] = useState<string | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  // const [nextPageNumber, setNextPageNumber] = useState<number | null>(null);
  // const [prevPageNumber, setPrevPageNumber] = useState<number | null>(null);
  // const [lastPageNumber, setLastPageNumber] = useState<number | null>(null);
  // const [filterBy, setFilterBy] = useState<string>("First Name");
  const [searchInput, setSearchInput] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  const [URLParams, setURLParams] = useState<Record<string, unknown>>({
    _page: 1,
    _limit: playersPerPage,
  });
  const [rushingDataRes, setRushingDataRes] = useState<RushingDataServerResponse>();
  const { isLoading } = useRushing(repoName, URLParams, setRushingDataRes);

  useEffect(() => {
    console.log({ isLoading });
  }, [isLoading]);

  const clearFilters = () => {
    setPageNumber(1);
    setPlayersPerPage(25);
  }

  const assignSortArrow = (col) => {
    if (selectedSortColumn === col) {
      return sortDirection === "ASC" ? ascArrow : downArrow;
    }

    return null;
  };

  const updateURLParams = (queryParams) => {
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
    updateURLParams({ _sort: col, _order: newSortDirection });
  };

  // Listners for Page number and URL changes.
  useEffect(() => {
    updateURLParams({ _page: pageNumber });
  }, [pageNumber]);

  useEffect(() => {
    updateURLParams({ _limit: playersPerPage });
  }, [playersPerPage]);


 useEffect(() => {
    console.log({URLParams});
  }, [URLParams]);

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
        updateURLParams={updateURLParams} />

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

            <table className="rushing-table">
              <thead>
                <tr>
                  <th title={TABLE.PLAYER}>{TABLE.PLAYER}</th>
                  <th title={TABLE.TEAM}>{TABLE.TEAM}</th>
                  <th title={TABLE.POS}>{TABLE.POS}</th>
                  <th title={TABLE.ATT}>{TABLE.ATT}</th>
                  <th title={TABLE.ATT_G}>{TABLE.ATT_G}</th>
                  <th title={TABLE.YDS}>{TABLE.YDS}</th>
                  <th
                    title={TABLE.AVG}
                    className="sortableHeader"
                    onClick={() => {
                      sortData("avg");
                    }}
                  >
                    <span>{TABLE.AVG}</span>
                    <span>{assignSortArrow("avg")}</span>
                  </th>
                  <th title={TABLE.YDS_G}>{TABLE.YDS_G}</th>
                  <th title={TABLE.TD}>{TABLE.TD}</th>
                  <th title={TABLE.LNG}>{TABLE.LNG}</th>
                  <th title={TABLE.FIRST}>{TABLE.FIRST}</th>
                  <th title={TABLE.FIRST_PERCENTAGE}>{TABLE.FIRST_PERCENTAGE}</th>
                  <th title={TABLE.TWENTY_PLUS}>{TABLE.TWENTY_PLUS}</th>
                  <th title={TABLE.FORTY_PLUS}>{TABLE.FORTY_PLUS}</th>
                  <th title={TABLE.FUM}>{TABLE.FUM}</th>
                </tr>
              </thead>
              <tbody>
                {rushingDataRes?.data.map((player, key) => {
                  const { Player, Team, Pos, Att, Yds, Avg, TD, Lng, FUM } = player;

                  return (
                    <tr key={key}>
                      <td>{Player}</td>
                      <td>{Team}</td>
                      <td>{Pos}</td>
                      <td>{Att}</td>
                      <td>{player["Att/G"]}</td>
                      <td>{Yds}</td>
                      <td
                        className={`${assignSelectedColumnClass(
                          selectedSortColumn,
                          "avg"
                        )}`}
                      >
                        {Avg}
                      </td>
                      <td>{player["Yds/G"]}</td>
                      <td>{TD}</td>
                      <td>{Lng}</td>
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
