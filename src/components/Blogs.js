import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link, BrowserRouter, Routes, Route  } from "react-router-dom";
import axios from "axios";
import React from "react";
import NavBar from "./NavBar";
import Headlines from "./Headlines";
import BlogC from "./BlogsC";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReadPage from "./ReadPage";
// import HeadlinesC from "./HeadlinesC";

const Blogs = () => {
  // const nav = useNavigate();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
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
  useEffect(() => {
    let a1 = "/v2/top-headlines";
    let a2 = "?country=" + "In";
    let a3 = "&apiKey=" + "ed32af5231b24efeb67b798d867839ed";
    let urladd = a1 + a2 + a3;
    axios
      .get(urladd)
      .then((res) => setInfo(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  // const [headl, setHeadl] = useState([]);
  // useEffect(() => {
  //   let b1 = "https://newsapi.org/v2/everything";
  //   let b2 = "?q=" + "bitcoin";
  //   let b3 = "&apiKey=" + "ed32af5231b24efeb67b798d867839ed";
  //   let urladd = b1 + b2 + b3;
  //   axios
  //     .get(urladd)
  //     .then((res) => setHeadl(res.data.articles.slice(0, 3)))
  //     .catch((err) => console.log(err));
  // }, []);

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
      <h1>Blogs</h1>
      <div className="marquee">
        <h3>Headlines</h3>
      </div>

      {/* {headl.map((a) => (
        <>
          <Headlines
            title={a.title}
            urlToImage={a.urlToImage}
            // url={a.url}
            
          />
        </>
      ))} */}

      {info.map((a) => (
        <>
          <BlogC
            title={a.title}
            urlToImage={a.urlToImage}
            url={a.url}
            description={a.description}
            author={a.author}
            publishedAt={a.publishedAt}
            content={a.content}
          />
          {/* <div id="blog" key={a.id}>
            <div className="card mb-3">
              <img
                src={a.urlToImage}
                className="card-img-top"
                id="blog_img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">{a.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{a.publishedAt}</small>
                  <br />
                  <small className="text-body-secondary">{a.author}</small>
                </p>
                {/* <a href={blogs.url} class="btn btn-primary">Go somewhere</a> */}
                {/* <Link
                  to={{ pathname: "/read", state: { blog: a } }}
                  className="btn btn-primary"
                >
                  Read More
                </Link> */}
                
              {/* </div>
            </div>
          </div>  */}
        </>
      ))}
    </div>
  );
};

export default Blogs;
