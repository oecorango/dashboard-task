import React from 'react';
import { Tests } from '../interface';
import { convertFirstCharToUpperCase } from '../utils';
import { Button } from './Button';
import styles from './ItemTest.module.scss';

type Props = {
  test: Tests | undefined;
  handleNavigate: (arg1: boolean | undefined, arg2: number | undefined) => void;
};

export const ItemTest = ({ test, handleNavigate }: Props) => {
  return (
    <div
      className={
        test?.siteId === 3
          ? styles.itemBlue
          : test?.siteId === 2
          ? styles.itemBlueLight
          : styles.itemRed
      }
    >
      <div className={styles.cellName}>{test?.name}</div>
      <div className={styles.cellType}>
        {convertFirstCharToUpperCase(test?.type)}
      </div>
      <div
        className={
          test?.status === 'DRAFT'
            ? styles.brownType
            : test?.status === 'ONLINE'
            ? styles.greenType
            : test?.status === 'STOPPED'
            ? styles.redType
            : styles.orangeType
        }
      >
        {convertFirstCharToUpperCase(test?.status)}
      </div>
      <div className={styles.cellURL}>{test?.site}</div>
      <Button
        name={test?.results ? 'Results' : 'Finalize'}
        type={test?.results}
        handleClick={() => handleNavigate(test?.results, test?.id)}
      />
    </div>
  );
};
