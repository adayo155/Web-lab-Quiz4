import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TeenyiconsrightSolid.module.css";

const TeenyiconsrightSolid = () => {
  const navigate = useNavigate();

  const onTeenyiconsrightSolidClick = useCallback(() => {
    navigate("/home-page-design1");
  }, [navigate]);

  return (
    <img
      className={styles.teenyiconsrightSolid}
      alt=""
      src="/teenyiconsrightsolid.svg"
      onClick={onTeenyiconsrightSolidClick}
    />
  );
};

export default TeenyiconsrightSolid;
