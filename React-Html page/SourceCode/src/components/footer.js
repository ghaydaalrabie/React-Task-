


import React from "react";

  class Footer extends React.Component{
    render(){

      return (
        <div className="footer-clean">
          <div className="footer-basic">
            <footer>
              
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/watch?v=JpRrX8JqJts">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Services</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p className="copyright">Company Name © 2018</p>
            </footer>
          </div>
        </div>
      );
    }
}

export default Footer
