import { createContext, Dispatch, SetStateAction } from "react";

export interface RushingData {
  Player: string;
  Team: string;
  Pos: string;
  Att: number;
  "Att/G": number;
  Yds: number;
  Avg: number;
  "Yds/G": number;
  TD: number;
  Lng: string;
  "1st": number;
  "1st%": number;
  "20+": number;
  "40+": number;
  FUM: number;
}

export interface RushingDataServerResponse {
  data: RushingData[];
  links: {
    first: number;
    next: number;
    last: number;
  };
  total: number;
}

export interface RushingValues {
  clearFilters: () => void;
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean | null>>;
  accountsPerPage: number;
  setAccountsPerPage: Dispatch<SetStateAction<number | null>>;
  nextPageNumber: number;
  setNextPageNumber: Dispatch<SetStateAction<number | null>>;
  prevPageNumber: number;
  setPrevPageNumber: Dispatch<SetStateAction<number | null>>;
  lastPageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number | null>>;
  pageNumber: number;
}

export const RushingValuesContext = createContext({} as RushingValues);
