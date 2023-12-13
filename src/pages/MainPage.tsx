import { useContext, useEffect } from 'react';
import { fetchTestsData } from '../api/fetchDashboardData';
import { Search } from '../components/Search';
import { TestsList } from '../components/TestsList';
import { Context } from '../context/context';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { tests, setTests, setFilter, setSearch, setCountTests } =
    useContext(Context);

  const handleReset = () => {
    setFilter('');
    setSearch('');
    tests?.length ? setCountTests(tests?.length) : setCountTests(0);
  };

  useEffect(() => {
    fetchTestsData()
      .then((data) => {
        setTests(data);
        if (data?.length) setCountTests(data?.length);
      })
      .catch((err) => console.warn(err));
  }, [setCountTests, setTests]);

  return (
    <main>
      <h1 className={styles.header}>DASHBOARD</h1>
      <Search />
      <TestsList handleReset={handleReset} />
    </main>
  );
};
