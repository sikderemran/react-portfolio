// import logo from './logo.svg';
import { Link } from "react-router-dom";

function Home() {
  return (
        <section className="home-section align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="home-text">
                <p>Hello, I'm</p>
                <h1>Md.Emran Sikder</h1>
                <h2>Software Engineer</h2>
                <a href="" className="btn">More About Me</a>
                <a href="" className="btn">Portfolio</a>
              </div>
              <div className="home-img">
                <div className="img-box">
                  <img src="img/profile-img.png" alt="emran"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
  );
}

export default Home;
