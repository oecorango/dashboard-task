import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTest } from '../api/fetchDashboardData';
import { ButtonReturn } from '../components/ButtonReturn';
import { ItemTest } from '../components/ItemTest';
import { Tests } from '../interface';
import styles from './ResultsPage.module.scss';

export const ResultsPage = () => {
  const { id } = useParams();
  const [test, setTest] = useState<Tests | undefined>();

  useEffect(() => {
    if (id)
      fetchTest(id)
        .then((data) => {
          if (data) setTest(data);
        })
        .catch((err) => console.warn(err));

    return () => {};
  }, [id]);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Results</h1>
      <h2 className={styles.h2}>Order basket redesing</h2>

      <ItemTest test={test} handleNavigate={() => console.log('hello world')} />

      <ButtonReturn />
    </main>
  );
};
