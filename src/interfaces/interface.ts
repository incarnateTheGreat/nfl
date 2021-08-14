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
