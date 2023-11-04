function HeadlinesC(blogs){
    return(
        <div>
      <div className="marquee">
        <h3>Headlines</h3>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ height: "50px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            
          <div className="card text-bg-dark">
  <img src={blogs.urlToImage} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">{blogs.title}</h5>
    <p className="card-text">{blogs.description}</p>
    {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
  </div>
</div>


          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    )

}

export default HeadlinesC;