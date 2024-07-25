import styles from "./navbar.module.css";
import logoIMG from "../../assets/images/logoIMG.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData, userData.phoneNumber);

  // if ()
  return (
    <div
      className={`${styles.body} py-6 px-40 bg-white flex justify-between items-center `}
    >
      <div className={`logoContainer`}>
        <img src={logoIMG} alt="" />
      </div>
      <div className={`flex items-center gap-5`}>
        <div className={`flex items-center gap-4`}>
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        {userData.phoneNumber ? (
          <div>
            <div className={`${styles.btn} ${styles.btn2}`}>Logout</div>
          </div>
        ) : (
          <div className={`flex items-center gap-4`}>
            <button
              onClick={() => navigate("/login")}
              className={`${styles.btn} ${styles.btn1} bg-[#5f121a] text-white`}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signin")}
              className={`${styles.btn} ${styles.btn2} border-black border`}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
