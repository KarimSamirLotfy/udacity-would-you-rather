import { Avatar, Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { Link } from "react-router-dom";

export default function Question({ question, chooseOne, chooseTwo, avatarURL, author={} }) {
  const {
    id,
    
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
          height: "30vh",
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
          <Avatar src={author.avatarURL} />
          <Text>   {author.name} asks</Text>
        </Row>
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
