import React from "react";
import styles from "./styles.module.scss";

interface FormProps {
  className?: string;
  children?: any;
}

export interface FormField {
  label: string;
  placeholder: string;
  type: string;
  size: "full" | "half";
  onChange: (val: string) => void;
}

const FormUI: React.FC<FormProps> = ({ className, children }) => {
  return (
    <div className={`${styles.form} ${className}`}>
      <form action="">{children}</form>
    </div>
  );
};

export { FormUI };
