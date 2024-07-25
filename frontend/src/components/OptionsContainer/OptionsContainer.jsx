import styles from "./optionscontainer.module.css";
import { ArtistBooking, EventManagement, Cabs, GuidedTours, Hotels, LuxuryCars } from "./OptionsContainerComponents/!OptionsContainerComponentsExports";
import { useSelector } from "react-redux";

const OptionsContainer = () => {

    const options = [
        {
            key: "hotels",
            element: <Hotels />
        },
        {
            key: "cabs",
            element: <Cabs />
        },
        {
            key: "luxuryCar",
            element: <LuxuryCars />
        },
        {
            key: "eventManagement",
            element: <EventManagement />
        },
        {
            key: "artistBooking",
            element: <ArtistBooking />
        },
        {
            key: "guidedTours",
            element: <GuidedTours />
        }
    ];

    const elemetToShow = useSelector((state) => (state.optionReducer.openOption));
    const selectedElement = options.find((option) => option.key === elemetToShow).element;

    // console.log(elemetToShow);

    return (
        <div className={`w-full bg-white ${styles.body}`}>
            {selectedElement}
        </div>
    );
};

export default OptionsContainer;