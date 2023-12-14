import React from 'react';
import styles from './Button.module.scss';

type Props = {
  name: string;
  type: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ name, type, handleClick }: Props) => {
  return (
    <button
      className={type ? styles.buttonGreen : styles.buttonGrey}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
