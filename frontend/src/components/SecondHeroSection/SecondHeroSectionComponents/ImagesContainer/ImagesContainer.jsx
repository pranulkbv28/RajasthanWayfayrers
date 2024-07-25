import styles from "./imagescontainer.module.css";
import secondHeroSectionImg1 from "../../../../assets/images/secondHeroSectionImg1.png";
import secondHeroSectionImg2 from "../../../../assets/images/secondHeroSectionImg2.png";
import secondHeroSectionImg3 from "../../../../assets/images/secondHeroSectionImg3.png";
import absoluteBadge from "../../../../assets/images/absoluteBadge.png";

const ImagesContainer = () => {
    return (
        <div className={`${styles.body} relative flex items-center justify-center`}>
            <div className={`flex flex-col items-center gap-4 justify-right ${styles.dualImagteContainer}`}>
                <img src={secondHeroSectionImg1} alt="img-1" />
                <img src={secondHeroSectionImg2} alt="img-2" />
            </div>
            <div className={`${styles.singleImageContainer}`}>
                <img src={secondHeroSectionImg3} alt="img-3" />
            </div>
            <div className={`absolute left-[33%] top-[35%]`}>
                <img src={absoluteBadge} alt="badge" />
            </div>
        </div>
    );
};

export default ImagesContainer;