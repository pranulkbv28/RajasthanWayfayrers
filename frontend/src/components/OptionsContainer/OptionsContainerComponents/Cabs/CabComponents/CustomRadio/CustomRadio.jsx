// import { useDispatch } from "react-redux";
import styles from "./customradio.module.css";
import CustomRadioButton from "../../../../../CustomRadioButton/CustomRadioButton";
// import { setCabType } from "../../../../../../features/cabType/cabTypeSlice";

const CustomRadio = () => {

    // const dispatch = useDispatch();

    // const onClickHandler = () => {
    //     dispatch(setCabType())
    // };

    return (
        <div className={`flex gap-12`}>
            {/* <div className={`${styles.customRadioContainer} ${styles.customRadioContainer2}`}>
                <input type="radio" name="cabType" id="outStationOneWay" />
                <label onClick={onClickHandler} htmlFor="outStationOneWay">Out Station One-Way</label>
            </div>
            <div className={`${styles.customRadioContainer}`}>
                <input type="radio" name="cabType" id="outStationroundTrip" />
                <label onClick={onClickHandler} htmlFor="outStationroundTrip">Out Station Round Trip</label>
            </div>
            <div className={`${styles.customRadioContainer}`}>
                <input type="radio" name="cabType" id="airportCabs" />
                <label onClick={onClickHandler} htmlFor="airportCabs">Airport Cabs</label>
            </div>
            <div className={`${styles.customRadioContainer}`}>
                <input type="radio" name="cabType" id="hourlyRentals" />
                <label onClick={onClickHandler} htmlFor="hourlyRentals">Hourly Rentals</label>
            </div> */}
            <CustomRadioButton id={"outStationOneWay"} name={"cabType"} text={"Out Station One-Way"} specialClass={"cabType2"} />
            <CustomRadioButton id={"outStationroundTrip"} name={"cabType"} text={"Out Station Round Trip"} />
            <CustomRadioButton customStyles={{ width: "auto", flex: "0 1 auto", paddingLeft: "30px", left: "-3%" }} specialClass={"cabType"} id={"airportCabs"} name={"cabType"} text={"Airport Cabs"} />
            <CustomRadioButton id={"hourlyRentals"} name={"cabType"} text={"Hourly Rentals"} />

        </div>
    );
};

export default CustomRadio;