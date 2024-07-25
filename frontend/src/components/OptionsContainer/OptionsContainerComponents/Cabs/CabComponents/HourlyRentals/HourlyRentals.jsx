import { useSelector } from "react-redux";
import styles from "./hourlyrentals.module.css";
import { useEffect } from "react";
import { FormComponents } from "../!cabComponentsExports";
import SearchButton from "../../../../../SearchButton/SearchButton";

const HourlyRentals = () => {

    const inputs = useSelector((state) => (state.inputReducer));

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    const submitHandler = () => {

    };

    return (
        <div className={`${styles.body}`}>
            <form onSubmit={submitHandler} >
                <div className={`${styles.fromContainer} mb-10`}>
                    <FormComponents inputTyp={"text"} labelName={"From"} placeholder={"Enter your location"} id={"from"} />
                </div>
                <div className={`grid grid-cols-2 gap-5`}>

                    {/* <FormComponents inputType={"text"} labelName={"To"} placeholder={"Enter your location"} id={"to"} /> */}
                    <FormComponents inputType={"date"} labelName={"Pickup Date"} id={"pickupDate"} />
                    <FormComponents inputType={"time"} labelName={"Pickup Time"} id={"pickupTime"} />
                    {/* <FormComponents inputType={"date"} labelName={"Return Time"} id={"dropDate"} />
                    <FormComponents inputType={"time"} labelName={"Return Time"} id={"dropTime"} /> */}

                    {/* <FormComponents />
                <FormComponents /> */}
                </div>
                <div className={`mt-9 w-1/3 ${styles.btnContainer}`}>
                    <SearchButton />
                </div>
            </form>
        </div>
    );
};

export default HourlyRentals;