import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UReadPage = () => {
  const handlePrint = () => {
    window.print();
  };

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
        {/* {data && ( // Add a conditional check for data
          <> */}
        <div id="read">
          <span className="card">
            {/* <img
              class="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
              alt="Card image cap"
            /> */}
            {/* <img
                  className="card-img-top"
                  src={
                    localStorage.getItem("imageUrl") ||
                    "https://mdbootstrap.com/img/Photos/Others/images/43.webp"
                  }
                  alt="Card image cap"
                /> */}

            <div className="card-body">
              <h4 className="card-title">
                {/* <p>{data.title}</p> */}
                <p>title</p>
              </h4>
              {/* <p className="card-text">Published :{data.publishedAt}</p> */}
              <p className="card-text">Publish</p>
              {/* <p className="card-text">{data.content}</p> */}
              <p className="card-text">content</p>

              {/* <Link to={data && data.url}>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4 rbtn"
                    >
                      Source
                    </button>
                  </Link> */}

              <button
                type="button"
                className="btn btn-primary btn-block mb-4 rbtn"
              >
                <Link
                  //   to={data.url}
                  style={{ color: "white", textDecoration: "none" }}
                  target="blank"
                >
                  Source
                </Link>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4 rbtn"
                onClick={handlePrint}
              >
                Print
              </button>
            </div>
          </span>
        </div>
        {/* </>
        )} */}
      </div>
    </div>
  );
};

export default UReadPage;
