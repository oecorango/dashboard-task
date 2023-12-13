import React, { useContext } from 'react';
import { Context } from '../context/context';
import { convertFirstCharToUpperCase, sliceURL } from '../utils';
import { Button } from './Button';
import { ArrowIcon } from './svg/ArrowIcon';
import styles from './TestsList.module.scss';

type Props = {
  handleReset: () => void;
};

export const TestsList = ({ handleReset }: Props) => {
  const { tests, filter } = useContext(Context);

  const filterTest = tests?.filter((test) =>
    test.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = () => {};

  return (
    <>
      {filterTest?.length ? (
        <>
          <div className={styles.head}>
            <div className={styles.cellHead}>NAME</div>
            <div className={styles.cellHead}>TYPE</div>
            <div className={styles.cellHeadSort}>
              <p>STATUS</p>
              <ArrowIcon />
            </div>
            <div className={styles.cellHead}>SITE</div>
            <div className={styles.cellHead}></div>
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
              <div className={styles.cellURL}>{sliceURL(test.site)}</div>
              <Button
                name={test.type ? 'Finalize' : 'Results'}
                type={test.results}
                handleClick={handleClick}
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
