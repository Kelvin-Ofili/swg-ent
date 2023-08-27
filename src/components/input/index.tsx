import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  type: string;
  label: string;
  error: string;
  placeholder: string;
  size: "full" | "half";
  onchange: (e: string) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  size,
  onchange,
  error,
  disabled,
}) => {
  return (
    <div
      className={
        size === "half"
          ? `${styles.input} ${styles.halfInput}`
          : `${styles.input} ${styles.fullInput}`
      }
    >
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onchange(e.target.value)}
        disabled={disabled}
      />
      {error !== "" && <p>{error}</p>}
    </div>
  );
};

interface TextAreaProps {
  label: string;
  onchange: (val: string) => void;
  error: string;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  onchange,
  error,
  disabled,
}) => {
  return (
    <div className={`${styles.input} ${styles.textArea}`}>
      <label htmlFor="">{label}</label>
      <textarea
        placeholder="Leave us a message"
        onChange={(e) => onchange(e.target.value)}
        disabled={disabled}
      />
      {error !== "" && <p>{error}</p>}
    </div>
  );
};

export { Input, TextArea };
