import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleBrani from "./SingleBrani";
import { Col } from "react-bootstrap/esm";

class MyBrani extends Component {
  state = {
    music: [],
    isLoading: true,
    isErrror: false,
  };

  componentDidMount() {
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ music: data.data, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    return (
      <Col>
        {this.state.isLoading ? (
          <p>Caricamento...</p>
        ) : this.state.isError ? (
          <p>C'è stato un errore durante il recupero dei dati.</p>
        ) : (
          <div>
            <Row className="mx-3">
              <h3 className="text-black my-2">queen</h3>
              {this.state.music.map((music) => (
                <SingleBrani
                  key={music.id}
                  title={music.Title}
                  poster={music.album.cover_medium}
                />
              ))}
            </Row>
          </div>
        )}
      </Col>
    );
  }
}

export default MyBrani;
