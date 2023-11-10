import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";


const SpotifyMenu = () => {
  return (
    <Container className="bg-dark">
      <Row col={12} col-md={6} offset-md-3>
        <Col className="d-flex flex-row">
          <Nav className="col-9 col-lg-11 mainLinks d-none d-md-flex ">
            <NavLink href="#">TRENDING</NavLink>
            <NavLink href="#">PODCAST</NavLink>
            <NavLink href="#">MOODS AND GENRES</NavLink>
            <NavLink href="#">NEW RELEASES</NavLink>
            <NavLink href="#">DISCOVER</NavLink>
          </Nav>
        </Col>

        
       
      </Row>

      {/* Fixed-bottom container */}
      <Container className="container-fluid fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                {/* Player Controls */}
                <Nav className="d-flex">
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
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </Nav.Link>
                </Nav>

                {/* Progress Bar */}
                <Container className="progress mt-3">
                  <div role="progressbar"></div>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SpotifyMenu;