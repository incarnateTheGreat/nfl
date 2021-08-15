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
    setNextPageNumber(data?.links?.next ?? null);
    setLastPageNumber(data?.links?.last);
  }, [data]);

  // Programmatically render out the number of pages as buttons.
  const RenderPageNumbers = (): JSX.Element => {
    const pageNumbers = Array(lastPageNumber)
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

    return <>{pageNumbers}</>;
  };

  return (
    <nav className="pagination">
      <div className="pagination-status">
        Page <span>{pageNumber}</span> of <span>{lastPageNumber}</span>
      </div>

      <div>
        <button
          data-testid="pagination-first-page"
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
          data-testid="pagination-previous"
          disabled={!prevPageNumber}
          type="button"
          title={PAGINATION.PREVIOUS}
          onClick={() => {
            if (prevPageNumber) {
              setPageNumber(prevPageNumber);
            }
          }}
        >
          &#8249;
        </button>
        <RenderPageNumbers />
        <button
          data-testid="pagination-forward"
          disabled={pageNumber === lastPageNumber}
          type="button"
          title={PAGINATION.FORWARD}
          onClick={() => {
            if (pageNumber < lastPageNumber) {
              setPageNumber(nextPageNumber);
            }
          }}
        >
          &#8250;
        </button>
        <button
          data-testid="pagination-last-page"
          disabled={pageNumber === lastPageNumber}
          type="button"
          title={PAGINATION.FORWARD_TO_LAST_PAGE}
          onClick={() => {
            if (pageNumber < lastPageNumber) {
              setPageNumber(lastPageNumber);
            }
          }}
        >
          &#187;
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
