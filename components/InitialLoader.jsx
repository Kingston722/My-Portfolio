import styles from "./InitialLoader.module.css";

const InitialLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0b2d]" role="status" aria-label="Loading website">
      <div className={styles.loader}>
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
        <div className={styles.loaderSquare} />
      </div>
    </div>
  );
};

export default InitialLoader;
