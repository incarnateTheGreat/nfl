import { useEffect, useState } from "react";
import { assignActivePageClass } from "utils/utils";
import { PAGINATION } from "utils/messages";

const Pagination = ({ data, pageNumber, setPageNumber }) => {
  const [nextPageNumber, setNextPageNumber] = useState<number | null>(null);
  const [prevPageNumber, setPrevPageNumber] = useState<number | null>(null);
  const [lastPageNumber, setLastPageNumber] = useState<number | null>(null);

  // Set the previous, next, and last variables for navigation.
  useEffect(() => {
    setPrevPageNumber(data?.links?.prev ?? null);
    setNextPageNumber(data?.links?.next);
    setLastPageNumber(data?.links?.last);
  }, [data]);

  // Programmatically render out the number of pages as buttons.
  const renderPageNumbers = () => {
    return Array(lastPageNumber)
      .fill(null)
      .map((_, i) => (
        <button
          key={i}
          type="button"
          className={assignActivePageClass(pageNumber, i + 1)}
          onClick={() => setPageNumber(i + 1)}
          title={`Page ${i + 1}`}
        >
          {i + 1}
        </button>
      ));
  };

  return (
    <nav className="pagination">
      <button
        disabled={!prevPageNumber}
        type="button"
        title={PAGINATION.BACK_TO_FIRST_PAGE}
        onClick={() => {
          if (prevPageNumber) {
            setPageNumber(1);
          }
        }}
      >
        &#171;
      </button>
      <button
        disabled={!prevPageNumber}
        type="button"
        title="Back"
        onClick={() => {
          if (prevPageNumber) {
            setPageNumber(prevPageNumber);
          }
        }}
      >
        &#8249;
      </button>
      {renderPageNumbers()}
      <button
        disabled={pageNumber === lastPageNumber}
        type="button"
        title="Forward"
        onClick={() => {
          if (pageNumber < lastPageNumber) {
            setPageNumber(nextPageNumber);
          }
        }}
      >
        &#8250;
      </button>
      <button
        disabled={pageNumber === lastPageNumber}
        type="button"
        title="Forward to the last page"
        onClick={() => {
          if (pageNumber < lastPageNumber) {
            setPageNumber(lastPageNumber);
          }
        }}
      >
        &#187;
      </button>
    </nav>
  );
};

export default Pagination;
