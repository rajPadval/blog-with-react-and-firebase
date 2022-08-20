import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; //useNavigate page is used to redirect pages
const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const SignWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true); //to stay login next time
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <div className="loginHeading">
        <p>Sign In With Google to Continue</p>
      </div>
      <button className="loginBtn" onClick={SignWithGoogle}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
