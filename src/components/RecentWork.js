function RecentWork() {
 
  const toggleClass = (e) => {
    document.querySelector('.portfolio-popup').classList.toggle("open")
    document.body.classList.toggle("hide-scrolling")
    //document.getElementById('root').classList.toggle("portfolio-section")
  };
  return (
    <>
    <section className="portfolio-section ptb-80">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Recent Works</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button onClick={toggleClass} className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image" />
            </div>
            <h3 className="portfolio-item-title">Portfolio item</h3>
            <button className="btn view-project-btn">view project</button>
            <div className="portfolio-item-details">
                <div className="description">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="general-info">
                    <ul>
                        <li>Created <span>11 Feb 2022</span></li>
                        <li>Technologies Used <span>Html5,Css3</span></li>
                        <li>Role <span>FrontEnd</span></li>
                        <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="portfolio-popup">
      <div className="popup-inner">
        <div className="popup-content">
          <div className="popup-header">
            <button onClick={toggleClass} className="btn popup-close">x</button>
            <div className="popup-thumbnail">
              <img src="img/profile-img.png" alt="portfolio image"  />
            </div>
            <h3>Landing Page</h3>
          </div>
          <div className="popup-body">
            <div className="description">
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
            </div>
            <div className="general-info">
                <ul>
                    <li>Created <span>11 Feb 2022</span></li>
                    <li>Technologies Used <span>Html5,Css3</span></li>
                    <li>Role <span>FrontEnd</span></li>
                    <li>View Live <span><a href="#" target="blank">www.google.com</a></span></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RecentWork;
