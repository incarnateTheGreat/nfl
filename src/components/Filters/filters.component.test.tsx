import { act, fireEvent, render } from "@testing-library/react";
import Filters from "components/Filters/filters.component";

const mockFiltersData = {
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
  ],
  playersPerPage: 25,
  searchInput: "",
  setPageNumber: jest.fn(),
  setPlayersPerPage: (playersPerPageVal) => {
    mockFiltersData.playersPerPage = +playersPerPageVal;
  },
  setSearchInput: (searchInputVal) => {
    mockFiltersData.searchInput = searchInputVal;
  },
  clearFilters: jest.fn(),
};

describe("Filters component", () => {
  test("Player search input changes on update", async () => {
    let component;

    component = render(<Filters {...mockFiltersData} />);

    const { getByTestId } = component;

    const searchInput: HTMLInputElement = getByTestId("filter-search-input");

    // Verify that the search input is active and empty
    expect(searchInput).toBeTruthy();
    expect(searchInput.value).toBe("");

    // Update the search input;
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "Garry" } });
    });

    await component.rerender(<Filters {...mockFiltersData} />);

    // Verify that the search input has been poplated.
    expect(searchInput).toBeTruthy();
    expect(searchInput.value).toBe("Garry");
  });

  test("Players per page dropdown updates", async () => {
    let component;

    component = render(<Filters {...mockFiltersData} />);

    const { getByTestId } = component;

    const playersPerPage: HTMLSelectElement = getByTestId(
      "filter-players-per-page"
    );

    // Verify that the players per page dropdown is active and the default value is selected.
    expect(playersPerPage).toBeTruthy();
    expect(playersPerPage.value).toBe("25");

    // Update the players per page dropdown.
    await act(async () => {
      fireEvent.change(playersPerPage, { target: { value: "50" } });
    });

    await component.rerender(<Filters {...mockFiltersData} />);

    // Verify that the players per page has been updated to 50.
    expect(playersPerPage).toBeTruthy();
    expect(playersPerPage.value).toBe("50");
  });

  test("Clear filters button resets successfully", async () => {
    const mockFiltersClearFilters = {
      ...mockFiltersData,
      playersPerPage: 50,
      searchInput: "Garry",
      clearFilters: () => {
        mockFiltersClearFilters.searchInput = "";
        mockFiltersClearFilters.playersPerPage = 25;
      },
    };

    let component;

    component = render(<Filters {...mockFiltersClearFilters} />);

    const { getByTestId } = component;

    const searchInput: HTMLInputElement = getByTestId("filter-search-input");
    const clearFilters: HTMLSelectElement = getByTestId("filter-clear-filters");
    const playersPerPage: HTMLSelectElement = getByTestId(
      "filter-players-per-page"
    );

    // Verify that the clear filters button, the search input, and the players per page elements are active.
    expect(clearFilters).toBeTruthy();
    expect(searchInput).toBeTruthy();
    expect(playersPerPage).toBeTruthy();

    // Click the clear filters button.
    clearFilters.click();

    await component.rerender(<Filters {...mockFiltersClearFilters} />);

    // Verify that the players per page has been reset to 25 and the search input has been erased.
    expect(searchInput.value).toBe("");
    expect(playersPerPage.value).toBe("25");
  });
});
