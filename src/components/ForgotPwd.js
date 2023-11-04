import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/1024.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const nav = useNavigate();

//   useEffect(() => {
//     if (email != null) nav("/");
//   }, []);

  const [email, setEmail] = useState("");

  const cpwd = (event) => {
    event.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        // alert("Please Check your Email");
        toast.success("Reset Mail sent", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            // progress: ,
            theme: "dark",
          });
        const timer = setTimeout(() => {
            nav("/"); // Replace "/other-page" with the desired destination path
          }, 4000);
      })
      .catch((err) => alert("issue" + err));
  };

  return (
    <>
      <div className="text-center">
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
        <img
          src={logo}
          className="rounded"
          alt="..."
          style={{ height: "200px" }}
        />
      </div>
      <form id="login">
      <h1>Change Password</h1>
        <br />
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="EmailID"
            onChange={(event) =>{setEmail(event.target.value);}}
          />
          <div className="text-center">
            <br/>
          <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          value="Login"
          onClick={cpwd}
        >
          Send Email
        </button>
          </div>
          
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
