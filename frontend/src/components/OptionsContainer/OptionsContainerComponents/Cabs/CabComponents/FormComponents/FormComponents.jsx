import { useDispatch } from "react-redux";
import styles from "./formcomponents.module.css";
import { inputChange } from "../../../../../../features/inputs/inputsSLice";

const FormComponents = ({ labelName, placeholder, inputType, id }) => {

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        dispatch(inputChange({ name: id, value: e.target.value }));
    };

    return (
        <div className={`${styles.labelInputContainer} flex flex-col`}>
            <label className={`mb-4 ${styles.label}`} htmlFor={id}>{labelName}</label>
            <input className={`${styles.input} pb-2`} type={inputType} name={id} id={id} onChange={changeHandler} placeholder={placeholder} />
        </div>
    );
};

export default FormComponents;