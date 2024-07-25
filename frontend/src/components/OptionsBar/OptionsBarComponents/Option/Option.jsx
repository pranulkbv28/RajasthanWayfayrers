import styles from "./option.module.css";
import { useDispatch } from "react-redux";
import { setOption } from "../../../../features/options/optionsSlice";

const Option = ({ img, text }) => {

    const dispatch = useDispatch();
    const strKey = text.replace(" ", "");
    const camelCaseStr = strKey.charAt(0).toLowerCase() + strKey.slice(1);
    const handleClick = () => {
        dispatch(setOption(camelCaseStr));
    };

    return (
        <div onClick={handleClick} className={`${styles.svgContainer} cursor-pointer`}>
            <img src={img} alt={`${img}-svg`} />
            <p>{text}</p>
        </div>
    );
};

export default Option;