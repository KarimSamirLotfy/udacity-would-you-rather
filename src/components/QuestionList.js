import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { get_questions, answerQuestion } from "../actions/Questions";
import { _saveQuestion } from "../utils/_DATA";
import Question from "./Question";
import { Link } from "react-router-dom";

export const QuestionList = ({ dispatch, questions = [], authedUser }) => {
  useEffect(() => {
    dispatch(get_questions());
    console.log(questions);
  }, []);

  const choose = (id, answer) => {
      console.log(`${id} was answerd as ${answer} by ${authedUser.id}`)
      dispatch(answerQuestion({authedUser:authedUser['id'], qid:id, answer,}));
  };

  return (
    <div>
      {Object.keys(questions).map((key, index) => {
          let question = questions[key]
          const id = questions[key]["id"];
          console.log("ques:", id);
        return (
          <Link key={id} to={`questions/:${id}`} state={{id:id}}>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  authedUser:state.authedUser,
});

export default connect(mapStateToProps)(QuestionList);
