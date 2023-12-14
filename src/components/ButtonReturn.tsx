import React from 'react';
import { BackIcon } from './svg/BackIcon';
import styles from './ButtonReturn.module.scss';
import { useNavigate } from 'react-router-dom';

export const ButtonReturn = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.back} onClick={() => navigate('/')}>
      <BackIcon />
      <p>Back</p>
    </div>
  );
};
