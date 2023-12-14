import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/context';
import { useSort } from '../hooks/useSort';
import { convertFirstCharToUpperCase } from '../utils';
import { Button } from './Button';
import { HeadTable } from './HeadTable';
import styles from './TestsList.module.scss';

type Props = {
  handleReset: () => void;
};

export const TestsList = ({ handleReset }: Props) => {
  const { tests, filter } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigate = (val: boolean, id: number) => {
    val ? navigate(`results/${id}`) : navigate(`finalize/${id}`);
  };

  const filterTest = tests?.filter((test) =>
    test.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSort = useSort();

  return (
    <>
      {filterTest?.length ? (
        <>
          <div className={styles.head}>
            <HeadTable handleSort={handleSort} filterTest={filterTest} />
          </div>
          {filterTest.map((test, index) => (
            <div
              className={
                test.siteId === 3
                  ? styles.itemBlue
                  : test.siteId === 2
                  ? styles.itemBlueLight
                  : styles.itemRed
              }
              key={index}
            >
              <div className={styles.cellName}>{test.name}</div>
              <div className={styles.cellType}>
                {convertFirstCharToUpperCase(test.type)}
              </div>
              <div
                className={
                  test.status === 'DRAFT'
                    ? styles.brownType
                    : test.status === 'ONLINE'
                    ? styles.greenType
                    : test.status === 'STOPPED'
                    ? styles.redType
                    : styles.orangeType
                }
              >
                {convertFirstCharToUpperCase(test.status)}
              </div>
              <div className={styles.cellURL}>{test.site}</div>
              <Button
                name={test.results ? 'Results' : 'Finalize'}
                type={test.results}
                handleClick={() => handleNavigate(test.results, test.id)}
              />
            </div>
          ))}
        </>
      ) : (
        <div className={styles.noSearch}>
          <p>Your search did not match any results.</p>
          <Button name={'Reset'} type={true} handleClick={handleReset} />
        </div>
      )}
    </>
  );
};
