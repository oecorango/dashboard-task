import React, { useState } from 'react';
import { SortBy, SortName, Tests } from '../interface';
import styles from './HeadTable.module.scss';
import { ArrowIcon } from './svg/ArrowIcon';

type Props = {
  filterTest: Tests[];
  handleSort: (arr: Tests[], nameCell: SortName, sortBy: SortBy) => void;
};

export const HeadTable = ({ handleSort, filterTest }: Props) => {
  const cellsHeadArray: SortName[] = ['NAME', 'TYPE', 'STATUS', 'SITE'];

  const [sortBy, setSortBy] = useState<SortBy>({
    name: '',
    type: 'ADS',
  });

  return (
    <>
      {cellsHeadArray.map((nameCell, ind) => (
        <div
          className={
            nameCell === sortBy.name ? styles.cellHeadSort : styles.cellHead
          }
          onClick={() => {
            sortBy.type === 'ADS'
              ? setSortBy({ name: nameCell, type: 'DESC' })
              : setSortBy({ name: nameCell, type: 'ADS' });
            handleSort(filterTest, nameCell, sortBy);
          }}
          key={ind}
        >
          {nameCell === sortBy.name ? (
            <>
              <p>{nameCell}</p>
              <ArrowIcon rotate={sortBy.type === 'DESC' ? true : false} />
            </>
          ) : (
            <p>{nameCell}</p>
          )}
        </div>
      ))}
    </>
  );
};
