import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Meet our Agents </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.lorem ipsum
          Harum eos et la!
        </p>

        <div className="container">
          <div className="box1 ">
            <img className="imges" src={require("./pic4.png")} alt="man pic" />
            <h3> Samul Plamer</h3>
            <p>
              <b>
                Company agents house <br /> real state
              </b>
            </p>
            <p>
              is a long established fact that eader <br /> will be distracted by
              the readble <br /> content .
            </p>

            <p>
              <b> View Profile</b>
            </p>
          </div>

          <div className="box2 ">
            <img
              className="imges"
              src={require("./pic3.jpg")}
              alt=" woman pic"
            />
            <h3> Nancy Markes </h3>
            <p>
              <b>
                Company agents house <br /> real state
              </b>
            </p>
            <p>
              is a long established fact that eader <br /> will be distracted by
              the readble <br /> content .
            </p>

            <p>
              <b> View Profile</b>
            </p>
          </div>

          <div className="box4 ">
            <img
              className="imges"
              src={require("./pic2.png")}
              alt=" girl pic "
            />
            <h3> Marry Jouns </h3>
            <p>
              <b>
                Company agents house <br /> real state
              </b>
            </p>
            <p>
              is a long established fact that eader <br /> will be distracted by
              the readble <br /> content .
            </p>

            <p>
              <b> View Profile</b>
            </p>
          </div>

          <div className="box4 ">
            <img
              className="imges"
              src={require("./pic1.jpg")}
              alt=" girl pic "
            />
            <h3> Lana Jouns </h3>
            <p>
              <b>
                Company agents house <br /> real state
              </b>
            </p>
            <p>
              is a long established fact that eader <br /> will be distracted by
              the readble <br /> content .
            </p>

            <p>
              <b> View Profile</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
