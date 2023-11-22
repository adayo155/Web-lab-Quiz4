import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./Started.module.css";

const Started = () => {
  const navigate = useNavigate();

  const onMaterialSymbolshomePinClick = useCallback(() => {
    navigate("/home-page-design");
  }, [navigate]);

  return (
    <div className={styles.started}>
      <div className={styles.materialSymbolshomePinParent}>
        <img
          className={styles.materialSymbolshomePinIcon}
          alt=""
          src="/materialsymbolshomepin.svg"
          onClick={onMaterialSymbolshomePinClick}
        />
        <div className={styles.about}>About</div>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.timetable}>Timetable</div>
        <div className={styles.liveLocation}>Live Location</div>
        <div className={styles.groupChild} />
        <b className={styles.signIn}>Sign In</b>
      </div>
      <div className={styles.pinpointIsTheFastestTrackiParent}>
        <div className={styles.pinpointIsTheContainer}>
          <p className={styles.pinpointIsThe}>
            Pinpoint is the fastest tracking and reservation software solution
            for personal and enterprise vehicles for institutes, offices and
            companies with live tracking, history recording, estimated arrival
            time and usage report generation and much more features.
          </p>
          <p className={styles.pinpointIsThe}>&nbsp;</p>
          <p className={styles.pinpointIsThe}>
            We ensure the best usage for vehicles tracking and reservation
            system security with advance encryption standards and capability of
            keeping your assets like car, points much more secure with the live
            tracking system
          </p>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.aboutPinpointWrapper}>
            <b className={styles.aboutPinpoint}>About Pinpoint</b>
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.startedChild} />
      <b className={styles.enterEmail}>Enter Email</b>
      <div className={styles.startedItem} />
      <b className={styles.enterFeedback}>Enter Feedback</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <b className={styles.enterContact}>Enter Contact</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <b className={styles.submit}>SUBMIT</b>
      </div>
      <div className={styles.startedInner} />
      <b className={styles.feedbackForm}>Feedback Form</b>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
    </div>
  );
};

export default Started;
