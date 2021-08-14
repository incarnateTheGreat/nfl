import { RushingData } from "interfaces/interface";
import { useQuery } from "react-query";
import { SERVER_URL } from "utils/constants";
import { parseLinkHeader } from "utils/utils";

const useRushing = (repoName, pageNumber, setData) => {
  return useQuery<RushingData[]>(
    [repoName, pageNumber],
    () => {
      let url = `${SERVER_URL}/rushing?_page=${pageNumber}&_limit=10`;

      // Return the Consent data and set the Pagination data.
      return fetch(url).then(async (response) => {
        const data = await response.json();

        // Set the Pagination for use. Get the previous, last, and total number of pages.
        const paginationData = {
          total: +response.headers.get("X-Total-Count"),
          links:
            response.headers.get("Link") &&
            parseLinkHeader(response.headers.get("Link")),
          data,
        };

        setData(paginationData);

        return data;
      });
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useRushing;
