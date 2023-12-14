import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/context';
import { useSort } from '../hooks/useSort';
import { Button } from './Button';
import { HeadTable } from './HeadTable';
import { ItemTest } from './ItemTest';
import styles from './TestsList.module.scss';

type Props = {
  handleReset: () => void;
};

export const TestsList = ({ handleReset }: Props) => {
  const { tests, filter } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigate = (val: boolean | undefined, id: number | undefined) => {
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
            <ItemTest test={test} handleNavigate={handleNavigate} key={index} />
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
