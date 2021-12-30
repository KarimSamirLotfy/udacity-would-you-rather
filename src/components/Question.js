import { Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { Link } from "react-router-dom";


export default function Question({
  question,
  chooseOne = () => {
    console.log("choose 1");
  },
  chooseTwo = () => {
    console.log("choose 2");
  },
}) {
  const {
    id,
    author,
    timestamp,
    optionOne: { text: text_1, votes: votes_1 },
    optionTwo: { text: text_2, votes: votes_2 },
  } = question;
  return (
    <div>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <Text>Would You Rather</Text>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => {
                chooseOne();
              }}
            >
              {text_1}
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => {
                chooseTwo();
              }}
            >
              {text_2}
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
