import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.allCopyRights}>
        All copy rights are reserved by Sukkur IBA University
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
    </div>
  );
};

export default Footer;
