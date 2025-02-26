import React from "react";
import img2 from "../images/bg.jpg";

function Home() {
  let colors = [
    "red",
    "green",
    "blue",
    "orange",
    "blue",
    "orange",
    "blue",
    "orange",
  ];
  const img = { height: "100%", width: "100%" };
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "yellowgreen" }}>
        Hello World
      </h1>
      <h2>charif</h2>
      <div className="text-break">1.{colors.map((c) => c)}</div>
      <hr />
      <div className="text-break">2.{colors.map((c) => (<span className="me-1">{c}</span>))}</div>
      <hr />
      <div className="d-flex justify-content-start flex-wrap fs-4">
        {colors.map((c, index) => (
          <div className="me-3" key={index}>
            {index}.{c}
          </div>
        ))}
      </div>
      <img
        class="img-fluid"
        src="https://4kwallpapers.com/images/walls/thumbs_3t/21085.jpg"
        alt=""
      />
      <div class="row g-2 mt-1">
        <div class="col">
          <img class="img-fluid" style={img} src="./login.jpeg" alt="" />
        </div>
        <div class="col">
          <img class="img-fluid" style={img} src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
