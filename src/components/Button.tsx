import React from "react";
import styles from "./Button.module.scss";

type Props = {
  name: string;
  type: boolean;
  handleClick: () => void;
};

export const Button = ({ name, type, handleClick }: Props) => {
  return (
    <button
      className={!type ? styles.buttonGrey : styles.buttonGreen}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
