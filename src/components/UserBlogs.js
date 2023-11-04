import { Link } from "react-router-dom";

function UserBlogs(blogs) {
  
  return (
    <>
      <div id="UBlogs" style={{paddingLeft:"10%", paddingRight:"10%", paddingTop:"5%" }}>
        <div class="card" style={{ width: "18rem;" }}>
          <img src={blogs.iurl} style={{height:"375px"}} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{blogs.title}</h5>
            <p class="card-text">
              {blogs.key}
            </p>
            <p class="card-text">
              {blogs.content}
            </p>
            {/* <Link to={'/uread'} class="btn btn-primary">Read More</Link> */}
            <button
                    type="button"
                    className="btn btn-primary btn-block mb-4 rbtn"
                  >
                    <Link
                      to={blogs.rurl}
                      style={{ color: "white", textDecoration: "none" }}
                      target="blank"
                    >
                      Source
                    </Link>
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-primary btn-block mb-4 rbtn"
                    onClick={handlePrint}
                  >
                    Print
                  </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBlogs;
