import { Button, Col, Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  CloseOutlined,
  CheckOutlined,
  CloseCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
// import { Pie, measureTextWidth } from "@ant-design/charts";
import { PieChart } from "react-minimal-pie-chart";

const { Text } = Typography;
const Poll = ({ authedUser, questions, users }) => {
  const { id = "8xf0y6ziyjabvozdd253nd" } = useLocation().state; // this to get state based on location or url
  const question = questions[id];
  const {
    author: author_id,
    optionOne: { text: text_1, votes: votes_1 },
    optionTwo: { text: text_2, votes: votes_2 },
  } = question;
  const author = users[author_id];
  const { avatarURL: author_avatar, name: author_name } = author;
  const { avatarURL: user_avatar, id: user_id } = authedUser;

  const total_votes_1 = votes_1.length;
  const total_votes_2 = votes_2.length;
  const total_votes = total_votes_1 + total_votes_2;
  return (
    <div>
      <Row gutter={[16, 24]} justify="space-around" align="middle">
        <h1>WOULD you Rather</h1>
      </Row>
      <Row gutter={[16, 24]} justify="space-around" align="middle">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </Row>
      <Row gutter={[16, 24]} justify="space-around" align="middle">
        <Col>
          <Button>
            {votes_1.includes(user_id) && (
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            )}
            {votes_2.includes(user_id) && (
              <CloseCircleTwoTone twoToneColor="#eb2f96" />
            )}

            <Text>{text_1}</Text>
          </Button>
        </Col>
        <Col>
          <Button>
            {votes_2.includes(user_id) && (
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            )}
            {votes_1.includes(user_id) && (
              <CloseCircleTwoTone twoToneColor="#eb2f96" />
            )}
            <Text>{text_2}</Text>
          </Button>
        </Col>
        <Row gutter={[150, 24]} justify="space-around" align="middle">
          <Col>
            <Text>
              {total_votes_1} people voted for this option around
              {Math.round((total_votes_1 / total_votes) * 100)}%
              <br />
            </Text>
          </Col>
          <Col>
            <Text>
              {total_votes_2} people voted for this option around
              {Math.round((total_votes_1 / total_votes) * 100)}%
            </Text>
          </Col>
        </Row>
      </Row>
      <PieChart
        lineWidth={30}
        radius={20}
        data={[
          { title: text_1, value: total_votes_1, color: "#52c41a" },
          { title: text_2, value: total_votes_2, color: "#eb2f96" },
        ]}
      />
      ;
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const quesiton_id = props["id"];
  const question = questions[quesiton_id];
  console.log(props["id"], question);

  return {
    authedUser,
    questions,
    users,
    question: question,
  };
};

export default connect(mapStateToProps)(Poll);
