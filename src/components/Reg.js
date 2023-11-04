import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import db from "./FbConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import logo from "../assets/1024.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isInitialRender, setIsInitialRender] = useState(true);

  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPwd = (event) => {
    setPwd(event.target.value);
  };

  const nav = useNavigate();

  const Register = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        // alert("Registration Successful");

        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          // progress: ,
          theme: "dark",
        });

        // nav("/");
        const timer = setTimeout(() => {
          nav("/"); // Replace "/other-page" with the desired destination path
        }, 5000);
        let data = { email, pwd };
        let n = res.user.uid;
        let r = ref(db, "registrations/" + n);
        set(r, data);
      })
      .catch((err) => alert("Issue : " + err));
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <div className="text-center">
        <img
          src={logo}
          className="rounded"
          alt="..."
          style={{ height: "200px" }}
        />
      </div>
      <form id="login">
        <h1>Register</h1>
        <br />
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="EmailID"
            onChange={hEmail}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            onChange={hPwd}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={Register}
          value="Reg"
        >
          Sign up
        </button>
        {/* 
        <div className="text-center">
          <p>or sign up with:</p>

          <Link to={"/cr"}>
            <button
              type="button"
              className="btn btn-link btn-floating mx-1 btn-lg"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </button>
          </Link>

          <Link to={"/cr"}>
            <button
              type="button"
              className="btn btn-link btn-floating mx-1 btn-lg"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </Link> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default Reg;