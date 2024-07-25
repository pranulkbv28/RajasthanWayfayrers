import { useSelector } from "react-redux";
import {
    CustomRadio,
    OutStationOneWay,
    OutStationRoundTrip,
    AirportCabs,
    HourlyRentals
} from "./CabComponents/!cabComponentsExports";
import styles from "./cabs.module.css";
import cabImage from "../../../../assets/images/cabImage.png";

const Cabs = () => {

    const cabTypeOptions = [
        {
            key: "outStationOneWay",
            element: <OutStationOneWay />
        },
        {
            key: "outStationroundTrip",
            element: <OutStationRoundTrip />
        },
        {
            key: "airportCabs",
            element: <AirportCabs />
        },
        {
            key: "hourlyRentals",
            element: <HourlyRentals />
        }
    ];

    const elementToShow = useSelector((state) => (state.cabTypeReducer.openCabType));

    const selectedElement = cabTypeOptions.find((cabTypeOption) => cabTypeOption.key === elementToShow).element;

    return (
        <div className={`${styles.body}`}>
            <div className={`w-full pl-12`}>
                <CustomRadio />
            </div>
            <div className={`w-full pl-3 py-8 flex ${styles.elementsContainer}`}>
                {selectedElement}
                <div className={`${styles.cabImageContainer}`}>
                    <img src={cabImage} alt="cab-image" />
                </div>
            </div>
        </div>
    );
};

export default Cabs;