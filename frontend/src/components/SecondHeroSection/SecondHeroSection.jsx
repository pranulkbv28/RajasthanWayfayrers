import ImagesContainer from "./SecondHeroSectionComponents/ImagesContainer/ImagesContainer";
import TextContainer from "./SecondHeroSectionComponents/TextContainer/TextContainer";
import styles from "./secondherosection.module.css";

const SecondHeroSection = () => {
    return (
        <div className={`${styles.body}`}>
            <ImagesContainer />
            <TextContainer />
        </div>
    );
};

export default SecondHeroSection;