import styles from "./styles.module.scss";

const Loader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <p>LOADING...</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Loader };
