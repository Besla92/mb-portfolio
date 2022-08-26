import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home">
        
        <div className="home-background">
            <div className="row">
                <div className="col-sm-12">
                    <div className="home-title-container">
                        <span className="home-title hello">
                            <h3>Hello. I am</h3>
                        </span>
                        <span className="home-title name">
                            <h1>Mario Beslic</h1>
                        </span>
                        <span className="home-title developer">
                            <h2>Full Stack Web & App Developer</h2>
                        </span>
                        
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home