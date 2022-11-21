import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";


//Data object 

const MovieBox =({title, poster_path, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return (
      <div className="card text-center bg-danger mb-3">
        <div className="card-body">
          <img className="card-img-top" src={API_IMG + poster_path} alt="" />
          <div className="card-body">
            <button type="button" className="btn btn-dark" onClick={handleShow}>
              Read Details 
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  className="card-img-top"
                  style={{ width: "18rem" }}
                  src={API_IMG + poster_path}
                  alt="" />
                
                <h3> Movie Name : {title}</h3>
               
                <h5>Release Date: {release_date}</h5>
               
                <h6>Overview</h6>
                <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
}

export default MovieBox;