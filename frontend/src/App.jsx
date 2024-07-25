import Navbar from "./components/Navbar/Navbar";
import OptionsBar from "./components/OptionsBar/OptionsBar";
import OptionsContainer from "./components/OptionsContainer/OptionsContainer";
import SecondHeroSection from "./components/SecondHeroSection/SecondHeroSection";
import styles from "./styles/app.module.css";
import "./styles/global.css";
// import { useSelector } from "react-redux";

function App() {

  // const option = useSelector((state) => (state.optionReducer.openOption));
  // console.log(option);

  return (
    <div>
      <div className={`${styles.body} flex flex-col`}>
        <Navbar />
        <div className={`w-full flex flex-col px-40 py-12`}>
          <OptionsBar />
          <OptionsContainer />
        </div>
      </div>
      <div className={`${styles.secondHeroContainer}`} style={{}}>
        <SecondHeroSection />
      </div>
    </div>
  );
}

export default App;
