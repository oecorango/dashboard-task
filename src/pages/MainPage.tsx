import React, { useEffect, useState } from 'react';
import { fetchTestsData } from '../api/fetchDashboardData';
import { TABLE_HEADERS } from '../constants';
import { Tests } from '../interface';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const [tests, setTests] = useState<Tests[]>()

  useEffect(() => {
    fetchTestsData()
      .then(data => setTests(data))
      .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <h1>DASHBOARD</h1>
      <table>
        <tr>
          {TABLE_HEADERS.map((name, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
        {tests?.map((test, index) => (
          <tr className={styles.test} key={index}>
            <td>{test.name}</td>
            <td>{test.type}</td>
            <td>{test.status}</td>
            <td>{test.site}</td>
            <td>{test.results ? 'Results' : 'Finalize'}</td>
          </tr>
      ))}
      </table>
      
    </>
  )
}
