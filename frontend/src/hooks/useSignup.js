import { useState } from "react";
import handleInputs from "../utils/handleInputs";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async ({ email, phoneNumber, fullName, password }) => {
    const success = handleInputs({ email, phoneNumber, fullName, password });

    if (!success) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phoneNumber, fullName, password }),
      });

      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An unknown error occurred.");
      }

      const data = await response.json();

      console.log(data);

      localStorage.setItem("user", JSON.stringify(data.data.loggedInUser));
      dispatch(setUser(data.loggedInUser));

      toast.success("Signup Successful");
    } catch (error) {
      console.log("Error in Submitting the Signin Data:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    loading,
  };
};

export default useSignup;
