import { Star } from "assets";
import styles from "./styles.module.scss";
import { Button } from "components";

interface ConfirmationProps {
  isSuccess: boolean;
  text: string;
  handleBack: () => void;
  buttonText: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  isSuccess,
  text,
  buttonText,
}) => {
  return (
    <section className={styles.container}>
      <Star />
      <h2>{isSuccess ? "Congratulations" : "Oops"}</h2>
      <p>{isSuccess ? text : ` Something Went Wrong!`}</p>
      <Button
        text={isSuccess ? "RETURN TO HOME" : buttonText}
        available={"open"}
        onClick={() => {}}
        className={styles.submitBtn}
      />
    </section>
  );
};

export { Confirmation };
