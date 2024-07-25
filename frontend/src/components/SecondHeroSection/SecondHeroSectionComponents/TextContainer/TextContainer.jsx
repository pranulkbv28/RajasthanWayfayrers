import styles from "./textcontainer.module.css";
import rightArrowSVG from "../../../../assets/images/rightArrowSVG.svg";

const TextContainer = () => {
    return (
        <div className={`${styles.body}`}>
            <header>
                Get To Know About Us
            </header>
            <div className={`mt-4`}>
                <h1 className="text-4xl font-bold">
                    About Us
                </h1>
                <p className={`${styles.paragraghs}`}>
                    Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae nunc sed velit.
                </p>
                <p className={`${styles.paragraghs}`}>
                    Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.
                </p>
                <div className={`${styles.listContainer} mt-3`}>
                    <p>Donec adipiscing tristique risus nec feugiat in</p>
                    <p>Donec adipiscing tristique risus nec feugiat in</p>
                    <p>Donec adipiscing tristique risus nec feugiat in</p>
                </div>
            </div>
            <div className={`mt-7`}>
                <button className={`flex items-center justify-center gap-3 bg-[#5F121A] rounded-3xl text-white py-2 px-3 duration-200 ease-in-out ${styles.readMoreBtn}`}>
                    <span>Read More</span>
                    <img src={rightArrowSVG} alt="right-arrow" />
                </button>
            </div>
        </div>
    );
};

export default TextContainer;