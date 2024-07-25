import styles from "./authnavbar.module.css";
import React from 'react';
import logoImg from "../../assets/images/logoIMG.png";
import { useNavigate } from "react-router-dom";

function AuthNavbar() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/")} className={`${styles.body} w-full py-6 flex items-center justify-center`}>
            <img src={logoImg} alt="logo" />
        </div>
    );
}

export default AuthNavbar;