import { useDispatch } from "react-redux";
import styles from "./customradiobutton.module.css";
import { setCabType } from "../../features/cabType/cabTypeSlice";

const CustomRadioButton = ({ name, text, id, customStyles, specialClass }) => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(setCabType(id));
    };

    return (
        <div style={customStyles} className={`${styles.customRadioContainer} ${specialClass === "cabType" ? styles.customRadioContainer2 : specialClass === "cabType2" ? styles.customRadioContainer3 : ""}`}>
            <input type="radio" name={name} id={id} />
            <label onClick={onClickHandler} htmlFor={id}>{text}</label>
        </div>
    );
};

export default CustomRadioButton;