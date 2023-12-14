enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export type Tests = {
  id: number;
  name: string;
  type: Type;
  status: Status;
  statusSort: number;
  site: string;
  siteId: number;
  results: boolean;
}

type SortType = 'ADS' | 'DESC';
export type SortName = 'NAME' | 'TYPE' | 'STATUS' | 'SITE' | '';

export type SortBy = {
  name: SortName;
  type: SortType;
};
