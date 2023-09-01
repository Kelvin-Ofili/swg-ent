import { ChevronDown } from "assets";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";

interface SelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  error: string;
  parentClassName?: string;
  disabled?: boolean;
}

const Select = ({
  value,
  options,
  onChange,
  placeholder,
  label,
  error,
  parentClassName,
  disabled,
}: SelectProps) => {
  const [show, setList] = useState(false);

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setList(false));

  return (
    <div className={`${styles.wrapper} ${parentClassName}`}>
      <label>{label}</label>
      <div onClick={() => setList(disabled ? false : !show)} className={styles.valueContainer}>
        <p className={value === "" ? styles.placeholder : ""}>
          {value === "" ? placeholder : value}
        </p>
        <ChevronDown />
      </div>
      {error !== "" && <p className={styles.error}>{error}</p>}
      {show ? (
        <div ref={dropdownRef} className={styles.menu}>
          {options.map((option, index) => (
            <button
              className={value === option ? styles.selected : ""}
              onClick={(e) => {
                e.preventDefault();
                onChange(option);
                setList(false);
              }}
              key={`${label}_${index}`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const useClickOutside = (ref: any, closeFunction: () => any) => {
  useEffect(() => {
    /**
     * Hide if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunction && closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export { Select };
