import React from 'react'; 
import './Home.css';
import img1 from '../img/img3.jpg';

const Home = () => {
    return (
      <div className="intro">
        <div className="firstSection">
          <div className="i-name">
            <h1>
              <span className="">Next Your Phone</span>
            </h1>
            <p>
              <span className="">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odit!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odit!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odit!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odit!
              </span>
            </p>
            <button className="btn btn-primary mt-5">Live Demo</button>
          </div>

          <div className="homeImg">
            <img src={img1} alt="" />
          </div>
            </div>
            <div className="coustomarReview">
                <h2>Coustomer Reviews</h2>
            </div>
      </div>
    );
};

export default Home;