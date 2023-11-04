import { Component } from "react";
import { Link } from "react-router-dom";
import ReadPage from "./ReadPage";

function BlogC(blogs) {

  const imgTrans = () => {
    localStorage.setItem('imageUrl', blogs.urlToImage);
  }

  
  return (
    <>
      <div id="blog">
        <div className="card mb-3">
          <img
            src={blogs.urlToImage}
            className="card-img-top"
            id="blog_img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{blogs.title}</h5>
            <p className="card-text">{blogs.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">{blogs.publishedAt}</small>
              <br />
              <small className="text-body-secondary">{blogs.author}</small>
            </p>
            <a href={blogs.url} class="btn btn-primary">Read More</a>
            {/* <Link to={`/read/${blogs.title}`} component={ReadPage} class="btn btn-primary" onClick={imgTrans}>
              Read More
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogC;
