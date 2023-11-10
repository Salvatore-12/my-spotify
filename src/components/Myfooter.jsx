import React from "react";
import {Nav} from "react-bootstrap";

const MyFooter = () => {
  return (
  
            <div className="d-flex">
              <Nav.Link href="#">
                <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
              </Nav.Link>
              <Nav.Link href="#">
                <img src="assets/playerbuttons/prev.png" alt="prev" />
              </Nav.Link>
              <Nav.Link href="#">
                <img src="assets/playerbuttons/play.png" alt="play" />
              </Nav.Link>
              <Nav.Link href="#">
                <img src="assets/playerbuttons/next.png" alt="next" />
              </Nav.Link>
              <Nav.Link href="#">
                <img src="assets/playbuttons/next.png" alt="repeat" />
              </Nav.Link>
            </div>
            
           
  )
};

export default MyFooter;