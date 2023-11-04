import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import UserBlogs from "./UserBlogs";
import { ref, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import db from "./FbConfig";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddBlogs = () => {
  const [uid, setUid] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // const handlePrint = () => {
  //   window.print();
  // };
  useEffect(() => {
    const user = getAuth().currentUser;
    if (!isInitialRender) {
      toast("Double Click on any word to get meaning", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setIsInitialRender(false);
    }
  }, [isInitialRender]);

  const handleDoubleClick = async (e) => {
    e.preventDefault();
    const selectedWord = window
      .getSelection()
      .toString()
      .replace(/\s+/g, " ")
      .replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, "")
      .trim();

    if (selectedWord) {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`
        );
        const data = await response.json();
        console.log(data);

        if (Array.isArray(data) && data.length > 0) {
          const firstEntry = data[0];
          const meanings = firstEntry.meanings;

          if (Array.isArray(meanings) && meanings.length > 0) {
            const firstMeaning = meanings[0].definitions[0].definition;
            // alert(`Meaning of ${selectedWord}: ${firstMeaning}`);
            toast(`Meaning of ${selectedWord}: ${firstMeaning}`, {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            // alert(`No meaning found for ${selectedWord}`);
            toast(`No meaning found for ${selectedWord}`, {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        } else {
          // alert(`No meaning found for ${selectedWord}`);
          toast(`No meaning found for ${selectedWord}`, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (error) {
        // alert(`Error occurred while fetching meaning: ${error.message}`);
        toast(`Error occurred while fetching meaning: ${error.message}`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      setUid(user.uid);
      const userRef = ref(db, "blogs/" + user.uid);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (data) {
          const blogsList = Object.entries(data).map(([key, value]) => ({
            id: key,
            title: value.title,
            content: value.content,
            iurl: value.iurl,
            rurl: value.rurl,
          }));
          setBlogs(blogsList);
        }
      });
    }
  }, []);

  if (blogs.length === 0) {
    return (
      <div>
        <NavBar />
        <h1>You haven't added any Blog yet.</h1>
        <Link to="/cr">Create Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <div onDoubleClick={handleDoubleClick}>
      {blogs.map((a) => (
        <>
          <UserBlogs
            
            iurl={a.iurl}
            title={a.title}
            content={a.content}
            rurl={a.rurl}
          />
        </>
      ))}
      </div>
    </div>
  );
};

export default AddBlogs;