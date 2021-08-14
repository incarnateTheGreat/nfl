import { useEffect, useState } from "react";
import useRushing from "hooks/useRushing";
import { RushingDataServerResponse } from "interfaces/interface";
import Pagination from "components/Pagination/pagination.component";
import { assignSelectedColumnClass } from "utils/utils";
import { TABLE } from "utils/messages";

const Rushing = () => {
  const ascArrow = "▲";
  const downArrow = "▼";
  const repoName = "nflRushingRepo";
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [playersPerPage] = useState<number>(10);
  const [sortDirection, setSortDirection] = useState<string>("ASC");
  const [URLParams, setURLParams] = useState<Record<string, unknown>>({
    _page: 1,
    _limit: playersPerPage,
  });
  const [selectedSortColumn, setSelectedSortColumn] = useState<string | null>(
    null
  );
  const [rushingDataRes, setRushingDataRes] =
    useState<RushingDataServerResponse>();
  const { isLoading } = useRushing(repoName, pageNumber, setRushingDataRes);

  useEffect(() => {
    console.log({ URLParams });

    console.log({ isLoading });
    console.log({ rushingDataRes });
  }, [isLoading, rushingDataRes]);

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

  return (
    <article className="rushing">
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
    </article>
  );
};

export default Rushing;
