import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  className?: string;
  available: "open" | "closed" | "none";
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  available,
  onClick,
}) => {
  return (
    <>
      <button
        className={`${styles.bookings} ${className} ${styles[available]}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <span>{text}</span>
      </button>
    </>
  );
};

export { Button };
