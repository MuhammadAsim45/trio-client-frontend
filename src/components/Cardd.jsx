import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Cardd = (props) => {
  return (
    <Card style={{ width: "30rem" }} className="m-2 main_card">
      <Card.Img variant="top" src={props.img} className=" card_img " />
      <Card.Body className=" main_card">
        <Card.Title className="card_title display-6 my-5 text-center fw-bold">
          {props.title}
        </Card.Title>
        <Card.Text className="card_text my-5 text-center      ">
          {props.text}
        </Card.Text>
        <Button className="login card-btn ">more details</Button>
      </Card.Body>
    </Card>
  );
};
