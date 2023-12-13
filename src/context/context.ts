import { Dispatch, SetStateAction, createContext } from 'react';
import { Tests } from '../interface';

export interface ContextData {
  tests: Tests[] | null;
  setTests: Dispatch<SetStateAction<Tests[] | null>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  countTests: number;
  setCountTests: Dispatch<SetStateAction<number>>;
}

export const Context = createContext({} as ContextData);