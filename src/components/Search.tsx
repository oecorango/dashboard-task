import React, { useContext } from 'react';
import { Context } from '../context/context';
import { SearchIcon } from './svg/SearchIcon';
import styles from './Search.module.scss';

export const Search = () => {
  const { tests, setFilter, setSearch, search, countTests, setCountTests } =
    useContext(Context);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    setSearch(filterValue);
    setFilter(filterValue);

    const countTests = tests?.filter((test) =>
      test.name.toLowerCase().includes(filterValue.toLowerCase())
    ).length;

    countTests ? setCountTests(countTests) : setCountTests(0);
  };

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        type="text"
        placeholder="What test are you looking for?"
        value={search}
        onChange={onChange}
      />
      <p>{`${countTests} tests`}</p>
    </div>
  );
};
