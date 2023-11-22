import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ onGroupContainerClick }) => {
  return (
    <div className={styles.ellipseParent} onClick={onGroupContainerClick}>
      <div className={styles.componentChild} />
      <b className={styles.getStartedContainer}>
        <p className={styles.get}>Get</p>
        <p className={styles.get}>{`Started -> `}</p>
      </b>
    </div>
  );
};

export default GroupComponent1;
