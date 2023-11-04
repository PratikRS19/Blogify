// import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UReadPage = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const toastConfig = {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleDoubleClick = async () => {
    const word = window.getSelection().toString().trim();
    setSelectedWord(word);

    if (word) {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        const data = response.data;

        if (Array.isArray(data) && data.length > 0) {
          const firstEntry = data[0];
          const meanings = firstEntry.meanings;

          if (Array.isArray(meanings) && meanings.length > 0) {
            const firstMeaning = meanings[0].definitions[0].definition;
            setMeaning(firstMeaning);
          } else {
            toast(`No meaning found for ${word}`, toastConfig);
          }
        } else {
          toast(`No meaning found for ${word}`, toastConfig);
        }
      } catch (error) {
        toast(`Error occurred while fetching meaning: ${error.message}`, toastConfig);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <ToastContainer {...toastConfig} />

      <div onDoubleClick={handleDoubleClick}>
        <div id="read">
          <span className="card">
            {/* ... */}
            <h4 className="card-title">
              <p>{selectedWord}</p>
            </h4>
            <p className="card-text">{meaning}</p>
            {/* ... */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UReadPage;
