import React from "react";
import "../style/train.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function FormFileExample() {
  return (
    <>
      <div
        className="train-container"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          backgroundColor:'lightgrey'
        }}
      >
        <h1
          style={{
            fontFamily: "bellota text",
   
            color: "black",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          TRAIN{" "}
          <span style={{ fontSize: "2rem", color: "red" }}>like a Caveman</span>
        </h1>

        <br></br>
        <h2
          style={{
            fontFamily: "bellota text",
         
            color: "black",
            paddingTop: "2rem",
            paddingBottom: "2rem",

            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          CLINICS & EVENTS
        </h2>
        <Container>
       <Container 
       style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "1rem",
       }}>
       <Row>
       <Col>
       <h2>
       TITLE: 
       </h2>
       <h2>
        DESCRIPTION:
       </h2>
      
      
        
        </Col>
        <Col>
          <h6>
            Date: 2023 <br></br>
            Location: 301_CATCHING HQ <br></br>
            Time: 9am-12pm <br></br>
            Cost: $50 <br></br>
          </h6>
          </Col>
          <Col className="mt-5">
          <button className="btn btn-primary">Register & Pay</button>
          </Col>
</Row>
       </Container>
       <br></br>
       <Container 
       style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "1rem",

       }}>
       <Row>
       <Col>
       <h2>
       TITLE: 
       </h2>
       <h2>
        DESCRIPTION:
       </h2>
      
      
        
        </Col>
        <Col>
          <h6>
            Date: 2023 <br></br>
            Location: 301_CATCHING HQ <br></br>
            Time: 9am-12pm <br></br>
            Cost: $50 <br></br>
          </h6>
          </Col>
          <Col className="mt-5">
          <button className="btn btn-primary">Register</button>
          </Col>
</Row>
       </Container>
       <br></br>
       <Container 
       style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "1rem",
       }}>
       <Row>
       <Col>
       <h2>
       TITLE: 
       </h2>
       <h2>
        DESCRIPTION:
       </h2>
      
      
        
        </Col>
        <Col>
          <h6>
            Date: 2023 <br></br>
            Location: 301_CATCHING HQ <br></br>
            Time: 9am-12pm <br></br>
            Cost: $50 <br></br>
          </h6>
          </Col>
          <Col className="mt-5">
          <button className="btn btn-primary">Register</button>
          </Col>
</Row>
       </Container>
       </Container>
      </div>
    </>
  );
}
