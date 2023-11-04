import React, { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import { ref, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import db from "./FbConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = ({ uid }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [rurl, setRurl] = useState("");
  const [iurl, setIurl] = useState("");
  

  const hTitle = (event) => {
    setTitle(event.target.value);
  };
  const hAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const hContent = (event) => {
    setContent(event.target.value);
  };
  const hRurl = (event) => {
    setRurl(event.target.value);
  };
  const hIurl = (event) => {
    setIurl(event.target.value);
  };
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      toast.success("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        // progress: ,
        theme: "dark",
      });
    } else {
      setIsInitialRender(false);
    }
  }, [isInitialRender]);
  

  const store = (event) => {
    event.preventDefault();
    if (title.length==0){
        // alert("Description can't be empty"); 
        toast.error('Please Add Title', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
        return;
    }  
    if ((author.trim().length == 0) ){
      // alert("Author Name is empty ");
      toast.error('Author Name is Empty', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setAuthor("");
      // rName.current.focus();
      // setAns("");
      return;
  }
  
  if (! author.match(/^[A-z ]+$/)){
    // alert("Invalid Name");
    toast.error('Invalid Name (Only Characters and Space allowed)', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    // setAuthor("");
    // rName.current.focus();
    // setAns("");
    return;
}
  if (content.length==0){
    // alert("Description can't be empty"); 
    toast.error("Content can't be empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    return;
  }  
  if (rurl.length==0){
  // alert("Description can't be empty"); 
  toast.error('Please Add Blog Reference URL', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  
  return;
  }  
  if (iurl.length==0){
  // alert("Description can't be empty"); 
  toast.error('Please Add Blog Image URL', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  
  return;
  }  


    const user = getAuth().currentUser;
    console.log(user)

    const userRef = ref(db, "blogs/" + user.uid);

    push(userRef, {
      title: title,
      author: author,
      content: content,
      rurl: rurl,
      iurl: iurl,
    })
      .then(() => {
        console.log(uid);
        // alert("Blog added successfully!");
        toast.success("Blog added successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          // progress: ,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error storing data: ", error);
      });
  };

  return (
    <div>
      <NavBar />
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
      <h1>Create a Blog</h1>
      <form id="form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hTitle}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Author Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hAuthor}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Content
          </label>
          <textarea
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hContent}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Reference URL
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hRurl}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Reference Image URL
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hIurl}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={store}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
