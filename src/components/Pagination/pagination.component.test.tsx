import { render } from "@testing-library/react";
import Pagination from "components/Pagination/pagination.component";

const mockPaginationData = {
  data: [
    {
      Player: "Aaron Ripkowski",
      Team: "GB",
      Pos: "FB",
      Att: 34,
      "Att/G": 2.1,
      Yds: 150,
      Avg: 4.4,
      "Yds/G": 9.4,
      TD: 2,
      Lng: "15",
      "1st": 10,
      "1st%": 29.4,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Aaron Rodgers",
      Team: "GB",
      Pos: "QB",
      Att: 67,
      "Att/G": 4.2,
      Yds: 369,
      Avg: 5.5,
      "Yds/G": 23.1,
      TD: 4,
      Lng: "23",
      "1st": 25,
      "1st%": 37.3,
      "20+": 3,
      "40+": 0,
      FUM: 3,
    },
    {
      Player: "Adam Humphries",
      Team: "TB",
      Pos: "WR",
      Att: 5,
      "Att/G": 0.3,
      Yds: 18,
      Avg: 3.6,
      "Yds/G": 1.2,
      TD: 0,
      Lng: "8",
      "1st": 0,
      "1st%": 0,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Adam Thielen",
      Team: "MIN",
      Pos: "WR",
      Att: 2,
      "Att/G": 0.1,
      Yds: 15,
      Avg: 7.5,
      "Yds/G": 0.9,
      TD: 0,
      Lng: "11",
      "1st": 1,
      "1st%": 50,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Adrian Peterson",
      Team: "MIN",
      Pos: "RB",
      Att: 37,
      "Att/G": 12.3,
      Yds: 72,
      Avg: 1.9,
      "Yds/G": 24,
      TD: 0,
      Lng: "13",
      "1st": 3,
      "1st%": 8.1,
      "20+": 0,
      "40+": 0,
      FUM: 1,
    },
    {
      Player: "Akeem Hunt",
      Team: "HOU",
      Pos: "RB",
      Att: 20,
      "Att/G": 2.5,
      Yds: 109,
      Avg: 5.5,
      "Yds/G": 13.6,
      TD: 0,
      Lng: "19",
      "1st": 4,
      "1st%": 20,
      "20+": 0,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Albert Wilson",
      Team: "KC",
      Pos: "WR",
      Att: 2,
      "Att/G": 0.1,
      Yds: 50,
      Avg: 25,
      "Yds/G": 3.1,
      TD: 1,
      Lng: "55T",
      "1st": 1,
      "1st%": 50,
      "20+": 1,
      "40+": 1,
      FUM: 0,
    },
    {
      Player: "Alex Collins",
      Team: "SEA",
      Pos: "RB",
      Att: 31,
      "Att/G": 2.8,
      Yds: 125,
      Avg: 4,
      "Yds/G": 11.4,
      TD: 1,
      Lng: "26",
      "1st": 8,
      "1st%": 25.8,
      "20+": 1,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Alex Smith",
      Team: "KC",
      Pos: "QB",
      Att: 48,
      "Att/G": 3.2,
      Yds: 134,
      Avg: 2.8,
      "Yds/G": 8.9,
      TD: 5,
      Lng: "24",
      "1st": 9,
      "1st%": 18.8,
      "20+": 1,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Alfred Blue",
      Team: "HOU",
      Pos: "RB",
      Att: 100,
      "Att/G": 7.1,
      Yds: 420,
      Avg: 4.2,
      "Yds/G": 30,
      TD: 1,
      Lng: "25",
      "1st": 23,
      "1st%": 23,
      "20+": 2,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Alfred Morris",
      Team: "DAL",
      Pos: "RB",
      Att: 69,
      "Att/G": 4.9,
      Yds: 243,
      Avg: 3.5,
      "Yds/G": 17.4,
      TD: 2,
      Lng: "17",
      "1st": 15,
      "1st%": 21.7,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Amari Cooper",
      Team: "OAK",
      Pos: "WR",
      Att: 1,
      "Att/G": 0.1,
      Yds: 0,
      Avg: 0,
      "Yds/G": 0,
      TD: 0,
      Lng: "0",
      "1st": 0,
      "1st%": 0,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Ameer Abdullah",
      Team: "DET",
      Pos: "RB",
      Att: 18,
      "Att/G": 9,
      Yds: "101",
      Avg: 5.6,
      "Yds/G": 50.5,
      TD: 0,
      Lng: "24",
      "1st": 6,
      "1st%": 33.3,
      "20+": 1,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Andre Ellington",
      Team: "ARI",
      Pos: "RB",
      Att: 34,
      "Att/G": 2.1,
      Yds: 96,
      Avg: 2.8,
      "Yds/G": 6,
      TD: 0,
      Lng: "13",
      "1st": 4,
      "1st%": 11.8,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Andre Williams",
      Team: "SD",
      Pos: "RB",
      Att: 18,
      "Att/G": 18,
      Yds: "87",
      Avg: 4.8,
      "Yds/G": 87,
      TD: 0,
      Lng: "14",
      "1st": 6,
      "1st%": 33.3,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Andrew Hawkins",
      Team: "CLE",
      Pos: "WR",
      Att: 2,
      "Att/G": 0.1,
      Yds: 0,
      Avg: 0,
      "Yds/G": 0,
      TD: 0,
      Lng: "1",
      "1st": 0,
      "1st%": 0,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Andrew Luck",
      Team: "IND",
      Pos: "QB",
      Att: 64,
      "Att/G": 4.3,
      Yds: 341,
      Avg: 5.3,
      "Yds/G": 22.7,
      TD: 2,
      Lng: "33",
      "1st": 20,
      "1st%": 31.3,
      "20+": 3,
      "40+": 0,
      FUM: 3,
    },
    {
      Player: "Andy Dalton",
      Team: "CIN",
      Pos: "QB",
      Att: 46,
      "Att/G": 2.9,
      Yds: 184,
      Avg: 4,
      "Yds/G": 11.5,
      TD: 4,
      Lng: "15",
      "1st": 17,
      "1st%": 37,
      "20+": 0,
      "40+": 0,
      FUM: 5,
    },
    {
      Player: "Andy Janovich",
      Team: "DEN",
      Pos: "FB",
      Att: 4,
      "Att/G": 0.4,
      Yds: 33,
      Avg: 8.3,
      "Yds/G": 3,
      TD: 1,
      Lng: "28T",
      "1st": 2,
      "1st%": 50,
      "20+": 1,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Antone Smith",
      Team: "TB",
      Pos: "RB",
      Att: 10,
      "Att/G": 3.3,
      Yds: 47,
      Avg: 4.7,
      "Yds/G": 15.7,
      TD: 0,
      Lng: "8",
      "1st": 1,
      "1st%": 10,
      "20+": 0,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Antonio Andrews",
      Team: "TEN",
      Pos: "RB",
      Att: 2,
      "Att/G": 0.1,
      Yds: 15,
      Avg: 7.5,
      "Yds/G": 0.9,
      TD: 0,
      Lng: "9",
      "1st": 0,
      "1st%": 0,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Antonio Brown",
      Team: "PIT",
      Pos: "WR",
      Att: 3,
      "Att/G": 0.2,
      Yds: 9,
      Avg: 3,
      "Yds/G": 0.6,
      TD: 0,
      Lng: "13",
      "1st": 1,
      "1st%": 33.3,
      "20+": 0,
      "40+": 0,
      FUM: 0,
    },
    {
      Player: "Arian Foster",
      Team: "MIA",
      Pos: "RB",
      Att: 22,
      "Att/G": 5.5,
      Yds: 55,
      Avg: 2.5,
      "Yds/G": 13.8,
      TD: 0,
      Lng: "9",
      "1st": 2,
      "1st%": 9.1,
      "20+": 0,
      "40+": 0,
      FUM: 1,
    },
    {
      Player: "Ben Roethlisberger",
      Team: "PIT",
      Pos: "QB",
      Att: 16,
      "Att/G": 1.1,
      Yds: 14,
      Avg: 0.9,
      "Yds/G": 1,
      TD: 1,
      Lng: "14",
      "1st": 3,
      "1st%": 18.8,
      "20+": 0,
      "40+": 0,
      FUM: 2,
    },
    {
      Player: "Benny Cunningham",
      Team: "LA",
      Pos: "RB",
      Att: 21,
      "Att/G": 1.9,
      Yds: 101,
      Avg: 4.8,
      "Yds/G": 9.2,
      TD: 0,
      Lng: "24",
      "1st": 4,
      "1st%": 19,
      "20+": 2,
      "40+": 0,
      FUM: 1,
    },
  ],
  links: {
    prev: null,
    first: 1,
    next: 2,
    last: 14,
  },
  total: 326,
};

describe("Pagination component", () => {
  test("When the page loads, Previous buttons should be disabled and Forward butons should be enabled", () => {
    let component;

    component = render(
      <Pagination
        data={mockPaginationData}
        pageNumber={1}
        setPageNumber={jest.fn()}
      />
    );

    const { getByTestId } = component;

    const firstPageBtn: HTMLButtonElement = getByTestId(
      "pagination-first-page"
    );
    const previousPageBtn: HTMLButtonElement = getByTestId(
      "pagination-previous"
    );
    const forwardPageBtn: HTMLButtonElement = getByTestId("pagination-forward");
    const lastPageBtn: HTMLButtonElement = getByTestId("pagination-last-page");

    // Verify that the first page & previous page buttons are visible on the page and are disabled.
    expect(firstPageBtn).toBeTruthy();
    expect(firstPageBtn).toBeDisabled();

    expect(previousPageBtn).toBeTruthy();
    expect(previousPageBtn).toBeDisabled();

    expect(forwardPageBtn).toBeTruthy();
    expect(forwardPageBtn).toBeEnabled();

    expect(lastPageBtn).toBeTruthy();
    expect(lastPageBtn).toBeEnabled();
  });

  test("When the paginates to a different page (but not the last page), both the Previous and Forward butons should be enabled", () => {
    let component;

    const mockPaginationDataNextPage = {
      ...mockPaginationData,
      links: {
        prev: 1,
        first: 2,
        next: 3,
        last: 14,
      },
    };

    component = render(
      <Pagination
        data={mockPaginationDataNextPage}
        pageNumber={2}
        setPageNumber={jest.fn()}
      />
    );

    const { getByTestId } = component;

    const firstPageBtn: HTMLButtonElement = getByTestId(
      "pagination-first-page"
    );
    const previousPageBtn: HTMLButtonElement = getByTestId(
      "pagination-previous"
    );
    const forwardPageBtn: HTMLButtonElement = getByTestId("pagination-forward");
    const lastPageBtn: HTMLButtonElement = getByTestId("pagination-last-page");

    // Verify that the first page & previous page buttons are visible on the page and are enabled.
    expect(firstPageBtn).toBeTruthy();
    expect(firstPageBtn).toBeEnabled();

    expect(previousPageBtn).toBeTruthy();
    expect(previousPageBtn).toBeEnabled();

    expect(forwardPageBtn).toBeTruthy();
    expect(forwardPageBtn).toBeEnabled();

    expect(lastPageBtn).toBeTruthy();
    expect(lastPageBtn).toBeEnabled();
  });

  test("When the user clicks the Last Page button, the Previous buttons should be enabled and the Forward buttons should be disabled", () => {
    let component;

    component = render(
      <Pagination
        data={mockPaginationData}
        pageNumber={1}
        setPageNumber={jest.fn()}
      />
    );

    const { getByTestId } = component;

    const firstPageBtn: HTMLButtonElement = getByTestId(
      "pagination-first-page"
    );
    const previousPageBtn: HTMLButtonElement = getByTestId(
      "pagination-previous"
    );
    const forwardPageBtn: HTMLButtonElement = getByTestId("pagination-forward");
    const lastPageBtn: HTMLButtonElement = getByTestId("pagination-last-page");

    // Verify that the first page & previous page buttons are visible on the page and are disabled.
    // The last page buttons are visible and enabled.
    expect(firstPageBtn).toBeTruthy();
    expect(firstPageBtn).toBeDisabled();

    expect(previousPageBtn).toBeTruthy();
    expect(previousPageBtn).toBeDisabled();

    expect(forwardPageBtn).toBeTruthy();
    expect(forwardPageBtn).toBeEnabled();

    expect(lastPageBtn).toBeTruthy();
    expect(lastPageBtn).toBeEnabled();

    // Update the players per page dropdown.
    firstPageBtn.click();

    // Pass updated data from the controller.
    const mockPaginationDataNextPage = {
      ...mockPaginationData,
      links: {
        prev: 13,
        first: 1,
        next: null,
        last: 14,
      },
    };

    component.rerender(
      <Pagination
        data={mockPaginationDataNextPage}
        pageNumber={14}
        setPageNumber={jest.fn()}
      />
    );

    // Verify that the first page & previous page buttons are visible on the page and are enabled.
    // The last page buttons are visible and disabled.
    expect(firstPageBtn).toBeTruthy();
    expect(firstPageBtn).toBeEnabled();

    expect(previousPageBtn).toBeTruthy();
    expect(previousPageBtn).toBeEnabled();

    expect(forwardPageBtn).toBeTruthy();
    expect(forwardPageBtn).toBeDisabled();

    expect(lastPageBtn).toBeTruthy();
    expect(lastPageBtn).toBeDisabled();
  });
});
