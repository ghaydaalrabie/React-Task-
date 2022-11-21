import React from 'react'




class Home extends React.Component {
  render() {
    
    return (
      <div className="App">
        <div className="portfolio">
          <h1> P O R T F O L I O </h1>

          <img
            className="heart"
            src={require("./imgs/heart.jpg")}
            alt="logo "
          />
        </div>

        <div className="container">
          <div className="quote">
            <p class="firstbox"> Success usually comes</p>

            <p class="firstbox"> to those who are too </p>

            <p class="secondbox">busy looking for it ! </p>

            <p class="author">
              <b> " Henry David Thoreau "</b>
            </p>
          </div>

          <div>
            <img
              className="headimage"
              src={require("./imgs/IMG-3218.jpg")}
              alt="headimage"
            />
          </div>
        </div>

        <div className="aboutme">
          <img
            className="aboutmeimage"
            src={require("./imgs/myphoto.png")}
            alt="about me pic "
          />
          <div>
            <p className="aboutmetext">
              <span class="aboutmetitle"> About Me </span> <br />
              <b>
                Hello I'M <span className="name">Ghayda Alrabee </span> !!
                <br /> I Am a web developer trainee with a design architecture
                background , based in Amman.Jordan , <br />
                My goal is to integrate the basics of design with code to create
                unique projects
              </b>
            </p>

            <div className="btn-con">
              <a
                href="https://drive.google.com/file/d/1CtKEGlTEtD2K1zgK_ugzvtq2WiXSnQNv/view?usp=drivesdk"
                target="_top"
                className="main-btn"
              >
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fa fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="skills-title">
            <h2>Technical skills</h2>
          </div>

          <div className="box">
            <div class="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <h4 class="text">HTML5</h4>
          </div>

          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                  85<span>%</span>
                </h2>
              </div>
            </div>
            <h4 class="text">CSS</h4>
          </div>

          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                  87<span>%</span>
                </h2>
              </div>
            </div>
            <h4 class="text">Photoshop</h4>
          </div>

          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <h4 class="text">Autodesk 3dMax </h4>
          </div>
        </div>
        <div className="title">
          <p className="heading"> Qualifications </p>
        </div>
        <div className="qualification">
          <div className="qbox1 ">
            <img
              className="qualiimage1"
              src={require("./imgs/q1.JPG")}
              alt=""
            />

            <p class="qtext"> Introduction to Photography </p>
          </div>
          <div className="qbox1 ">
            <img
              className="qualiimage2"
              src={require("./imgs/q2.jpg")}
              alt=""
            />
            <p class="qtext"> Autodesk Revit </p>
          </div>
          <div className="qbox1 ">
            <img
              className="qualiimage1"
              src={require("./imgs/q4.PNG")}
              alt=""
            />
            <p class="qtext"> Autodesk 3dMax </p>
          </div>
        </div>

        <div className="section" id="experience">
          <div className="container">
            <div className="exp-title">
              <h1 className="size-50">
                My <br /> Experiences
              </h1>
              <div className="h-50"></div>
            </div>
            <div>
              <ul className="timeline">
                <li className="timeline-company">
                  <div className="position">
                    <p className="timeline-company-date">June 2022 - present</p>
                    <h3> Orange Coding Academy </h3>
                    <h4> Web Developer trainee</h4>
                    <p> " Full-Stack Web Developer"</p>
                  </div>
                </li>

                <li className="timeline-company">
                  <div className="position">
                    <p className="timeline-company-date">
                      January 2020 - December 2021
                    </p>
                    <h3> Aqaba Development Corporation</h3>
                    <h4>Architecture Engineer</h4>
                    <p>
                      " Rehabilitation of the arrivals building at the passenger
                      terminal and linking it to the new expansion - Aqaba"
                    </p>
                  </div>
                </li>

                <li className="timeline-company">
                  <div className="position">
                    <p className="timeline-company-date">
                      Octobar 2019 - January 2020
                    </p>
                    <h3>Wahib Medanat Consultant Engineers</h3>
                    <h4> Architecture Engineer </h4>
                    <p> " Architectural plans design and furnishing " </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

    

export default Home ;