import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent1 from "../components/GroupComponent1";
import Footer from "../components/Footer";
import styles from "./HomePageDesign.module.css";

const HomePageDesign = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMaterialSymbolshomePinClick = useCallback(() => {
    navigate("/home-page-design");
  }, [navigate]);

  return (
    <div className={styles.homePageDesign}>
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
      <div className={styles.homePageDesignChild} />
      <b className={styles.signIn}>Sign In</b>
      <b className={styles.theFastPinpointContainer}>
        <p className={styles.theFastPinpoint}>{`The Fast Pinpoint `}</p>
        <p className={styles.getStarted}>{`Get Started ->`}</p>
        <p className={styles.theFastPinpoint}>{`Tracking & Reservation.`}</p>
      </b>
      <div className={styles.pinpointIsThe}>
        Pinpoint is the fastest tracking and reservation software solution for
        personal and enterprise vehicles for institutes, offices and companies
        with live tracking, history recording, estimated arrival time and usage
        report generation and much more features
      </div>
      <div className={styles.weEnsureThe}>
        We ensure the best usage for vehicles tracking and reservation system
        security with advance encryption standards and capability of keeping
        your assets like car, points much more secure with the live tracking
        system
      </div>
      <GroupComponent1 onGroupContainerClick={onGroupContainerClick} />
      <div className={styles.homePageDesignItem} />
      <div className={styles.users}>5000 Users</div>
      <div className={styles.homePageDesignInner} />
      <div className={styles.kDownloads}>10k+ Downloads</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.trustedClients}>10 Trusted Clients</div>
      </div>
      <b className={styles.pinpointSecurityEnsureContainer}>
        <p className={styles.theFastPinpoint}>Pinpoint Security,</p>
        <p className={styles.theFastPinpoint}>{`ensure the best `}</p>
        <p className={styles.theFastPinpoint}>usage for the institutes</p>
      </b>
      <div className={styles.rectangleDiv} />
      <div className={styles.getStarted1}>Get Started</div>
      <Footer />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img
        className={styles.teenyiconsleftSolid}
        alt=""
        src="/teenyiconsleftsolid.svg"
      />
      <img
        className={styles.teenyiconsrightSolid}
        alt=""
        src="/teenyiconsrightsolid.svg"
      />
    </div>
  );
};

export default HomePageDesign;
