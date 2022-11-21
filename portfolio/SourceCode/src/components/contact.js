


import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";


const Contact = () => {
    
    return (
      <div>
        {" "}
        <section
          className="container contact"
          id="contact"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "https://i.pinimg.com/564x/cf/e4/77/cfe47746eb52b8be76fb6712d17cc2ac.jpg"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 780,
            borderRadius: 15,
          }}
        >
          <div className="contact-container">
            <div className="main-title">
              <h2>
                Contact <span>Me</span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                      
                      <span>  Email</span>
                    </div>
                    <p>
                      <span> : ghaydaalrabie@gmail.com</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      {/* Girl icon with phone  */}
                      {/* Svg : Scalable Vector Graphics  */}
                      <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-telephone-inbound-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 
                              2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745
                               0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846
                               1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-
                               .362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707
                                5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5
                                 0 0 1 .708 0z"
                        />
                      </svg>
                      <span>Mobile Number </span>
                    </div>
                    <p>
                      <span> : 0798403672</span>
                    </p>
                  </div>
                </div>
                <img
                  className="contactwoman "
                  src={require("./imgs/woman.png")}
                  alt="woman"
                />
                <div className="contact-icons" style={{ marginTop: 20 }}>
                  <div className="contact-icon">
                    <a
                      href={"https://www.facebook.com/ghayda.alrabee.1"}
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                    <a href={"https://twitter.com/"} target="_top">
                      <FaTwitter />
                    </a>
                    <a
                      href={"https://github.com/ghaydaalrabie"}
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    <a href={"https://www.youtube.com/"} target="_top">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-contact">
                <form action className="contact-form">
                  <div className="input-control i-c-2">
                    <input type="text" required placeholder="YOUR NAME" />
                    <input type="text" required placeholder="LASt NAME " />
                  </div>
                  <div className="input-control">
                    <input type="email" required placeholder="ENTER Email " />
                  </div>
                  <div className="input-control">
                    <input
                      type="number"
                      required
                      placeholder="ENTER YOUR PHONE NUMBER"
                    />
                  </div>
                  <div className="input-control">
                    <input
                      type="text"
                      required
                      placeholder="ENTER YOUR Location"
                    />
                  </div>
                  <div className="input-control">
                    <textarea
                      name="Message"
                      cols={15}
                      rows={8}
                      placeholder="Message Here..."
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}


export default Contact ;