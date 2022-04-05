import React from 'react'; 
import './Home.css';
import img1 from '../img/img3.jpg';

import { Link } from 'react-router-dom';


const Home = () => {
    
    return (
      <div className="intro">
        <div className="firstSection">
          <div className="i-name">
            <h1>
              <span className="heading">Next Your Phone</span>
            </h1>
            <p>
              <span className="homeText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, odit! Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quo, odit! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quo, odit! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quo, odit!
              </span>
            </p>
            <button className="btn btn-primary mt-5">Live Demo</button>
          </div>

          <div className="homeImg">
            <img src={img1} alt="" />
          </div>
        </div>
        <h3>Coustomer Reviews</h3>
        <div className="coustomarReview mt-5">
          <Link to={"/reviews"}>
            <span className='btn btn-primary'>See All Reviews</span>
          </Link>
        </div>

        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col">
              <div class="card border-dark mb-3">
                <div class="card-body text-dark">
                  <h5 class="card-title">John Smith</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <p>Rating: 5</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card border-dark mb-3">
                <div class="card-body text-dark">
                  <h5 class="card-title">John Smith</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <p>Rating: 5</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card border-dark mb-3">
                <div class="card-body text-dark">
                  <h5 class="card-title">John Smith</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <p>Rating: 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Home;