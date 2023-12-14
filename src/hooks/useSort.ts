import { useContext } from "react";
import { Context } from "../context/context";
import { SortBy, SortName, Tests } from "../interface";

export const useSort = () => {
  const { setTests } = useContext(Context);

  const handleSort = (arr: Tests[], el: SortName, sortBy: SortBy) => {
    if (el === 'NAME' && sortBy.type === 'ADS')
      setTests(arr.sort((a, b) => a.name.localeCompare(b.name)));
    if (el === 'NAME' && sortBy.type === 'DESC')
      setTests(arr.sort((a, b) => b.name.localeCompare(a.name)));

    if (el === 'TYPE' && sortBy.type === 'ADS')
      setTests(arr.sort((a, b) => a.type.localeCompare(b.type)));
    if (el === 'TYPE' && sortBy.type === 'DESC')
      setTests(arr.sort((a, b) => b.type.localeCompare(a.type)));

    if (el === 'STATUS' && sortBy.type === 'ADS')
      setTests(arr.sort((a, b) => a.statusSort - b.statusSort));
    if (el === 'STATUS' && sortBy.type === 'DESC')
      setTests(arr.sort((a, b) => b.statusSort - a.statusSort));

    if (el === 'SITE' && sortBy.type === 'ADS')
      setTests(arr.sort((a, b) => a.site.localeCompare(b.site)));
    if (el === 'SITE' && sortBy.type === 'DESC')
      setTests(arr.sort((a, b) => b.site.localeCompare(a.site)));
  };

  return handleSort;
}