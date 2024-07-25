import styles from "./optionsbar.module.css";
import hotelSVG from "../../assets/images/hotelsSVG.svg";
import carSVG from "../../assets/images/carSVG.svg";
import Option from "./OptionsBarComponents/Option/Option";

const OptionsBar = () => {

    return (
        <div className={`${styles.body} rounded-[18px] text-[#f9faf9]`}>
            {/* <div className={`${styles.svgContainer}`}>
                <img src={hotelSVG} alt="hotel-svg" />
                <p>Hotels</p>
            </div> */}
            {/* <div className={`${styles.svgContainer}`}>
                <img src={carSVG} alt="car-svg" />
                <p>Cabs</p>
            </div>
            <div className={`${styles.svgContainer}`}>
                <img src={carSVG} alt="car-svg" />
                <p>Luxury Car</p>
            </div>
            <div className={`${styles.svgContainer}`}>
                <img src={carSVG} alt="car-svg" />
                <p>Event Management</p>
            </div>
            <div className={`${styles.svgContainer}`}>
                <img src={carSVG} alt="car-svg" />
                <p>Artist Booking</p>
            </div>
            <div className={`${styles.svgContainer}`}>
                <img src={carSVG} alt="car-svg" />
                <p>Guided Tours</p>
            </div> */}

            <Option img={hotelSVG} text={"Hotels"} />
            <Option img={carSVG} text={"Cabs"} />
            <Option img={carSVG} text={"Luxury Car"} />
            <Option img={carSVG} text={"Event Management"} />
            <Option img={carSVG} text={"Artist Booking"} />
            <Option img={carSVG} text={"Guided Tours"} />
        </div>
    );
};

export default OptionsBar;