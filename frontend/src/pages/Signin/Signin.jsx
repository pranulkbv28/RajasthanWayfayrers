import styles from "./signin.module.css";
import AuthNavbar from "../../components/AuthNavbar/AuthNavbar";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';
// import useLogin from "../../hooks/useLogin";
import useSignup from "../../hooks/useSignup";


function Signin() {

    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });

    const { signup, loading } = useSignup();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);
    };

    return (
        <div className={`${styles.body} h-screen flex flex-col`}>
            <AuthNavbar />
            <div className={`${styles.formBody} mx-auto w-[50%] flex flex-col items-center justify-center flex-grow`}>
                <form onSubmit={submitHandler} className={`w-full mb-8`}>
                    <div className={`mb-6`}>
                        <h3 className={`text-3xl font-semibold domine _700 text-center`}>
                            Welcome to Rajasthan Travels
                        </h3>
                        <p className={`outfit _400 text-center`}>
                            Sign up to explore the best travel destination in Rajasthan
                        </p>
                    </div>
                    <div className={`${styles.inputContainer} w-full text-center`}>
                        <input onChange={(e) => (setInputs({ ...inputs, fullName: e.target.value }))} type="text" name="fullName" id="fullName" placeholder="Enter Full Name" />
                        <input onChange={(e) => (setInputs({ ...inputs, email: e.target.value }))} type="email" name="email" id="email" placeholder="Enter Email" />
                        <input onChange={(e) => (setInputs({ ...inputs, password: e.target.value }))} type="password" name="password" id="password" placeholder="Enter Password" />
                        <input onChange={(e) => (setInputs({ ...inputs, phoneNumber: e.target.value }))} type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" />
                    </div>
                    <div className={`${styles.verifyBtnContainer} w-full text-center`}>
                        <button type="submit">
                            {loading ? "Loading..." : "Verify"}
                        </button>
                    </div>
                </form>
                <div className={`${styles.orContainer}`}>
                    <hr />
                    <span>or continue with</span>
                    <hr />
                </div>
                <div className={`${styles.googleBtnContainer}`}>
                    <button className={`relative`}>
                        <span className={`absolute left-[5%] top-[30%]`}>
                            <FcGoogle />
                        </span>
                        <span>
                            Google
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;