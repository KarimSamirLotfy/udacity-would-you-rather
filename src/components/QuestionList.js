import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { get_questions, answerQuestion } from "../actions/Questions";
import { _saveQuestion } from "../utils/_DATA";
import Question from "./Question";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import {useNavigate} from 'react-router'

const { TabPane } = Tabs;

export const QuestionList = ({ dispatch, questions = [], authedUser }) => {
  useEffect(() => {
    dispatch(get_questions());
    console.log(questions);
  }, []);
  const navigate = useNavigate();
  const choose = (id, answer) => {
    console.log(`${id} was answerd as ${answer} by ${authedUser.id}`);
    dispatch(answerQuestion({ authedUser: authedUser["id"], qid: id, answer }));
    navigate(`../question/${id}`);
  };
  const did_user_answer_this_question = (quesiton) => {
    const { id } = authedUser;
    const {
      author,
      optionOne: { text: text_1, votes: votes_1 },
      optionTwo: { text: text_2, votes: votes_2 },
    } = quesiton;
    let all_voters = votes_1.concat(votes_2);
    console.log(
      `${all_voters} voted for this question and ${id} is in voters ${all_voters.includes(
        id
      )}`
    );
    if (all_voters.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  const handelOnClick = (e, quesiton) => {
    // if the user did not answer this then do not let him reach poll.js
    if (!did_user_answer_this_question(quesiton)) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Not Answered" key="1">
          {Object.keys(questions)
            .filter((key) => {
              let quesiton = questions[key];
              if (did_user_answer_this_question(quesiton)) {
                return false;
              }
              return true;
            })
            .sort((a_key, b_key) => {
              const a = questions[a_key];
              const b = questions[b_key];

              console.log(a, b);

              return b["timestamp"] - a["timestamp"];
            })
            .map((key, index) => {
              let question = questions[key];
              const id = questions[key]["id"];
              console.log("ques:", id);
              return (
                <Link
                  onClick={(e) => {
                    handelOnClick(e, question);
                  }}
                  key={id}
                  to={`questions/:${id}`}
                  state={{ id: id }}
                >
                  <Question
                    key={index}
                    chooseOne={() => {
                      choose(question["id"], "optionOne");
                    }}
                    chooseTwo={() => {
                      choose(question["id"], "optionTwo");
                    }}
                    question={questions[key]}
                  />
                </Link>
              );
            })}
        </TabPane>
        <TabPane tab="Answered" key="2">
          {Object.keys(questions)
            .filter((key) => {
              let quesiton = questions[key];
              if (did_user_answer_this_question(quesiton)) {
                return true;
              }
              return false;
            })
            .sort((a_key, b_key) => {
              const a = questions[a_key];
              const b = questions[b_key];

              console.log(a, b);

              return b["timestamp"] - a["timestamp"];
            })
            .map((key, index) => {
              let question = questions[key];
              const id = questions[key]["id"];
              console.log("ques:", id);
              return (
                <Link
                  onClick={(e) => {
                    handelOnClick(e, question);
                  }}
                  key={id}
                  to={`questions/:${id}`}
                  state={{ id: id }}
                >
                  <Question
                    key={index}
                    chooseOne={() => {
                      choose(question["id"], "optionOne");
                    }}
                    chooseTwo={() => {
                      choose(question["id"], "optionTwo");
                    }}
                    question={questions[key]}
                  />
                </Link>
              );
            })}
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(QuestionList);
