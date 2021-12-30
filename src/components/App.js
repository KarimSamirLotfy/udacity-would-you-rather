import React, { Fragment } from "react";
import { connect } from "react-redux";
import { get_users } from "../actions/users";
import { useEffect } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import UserProfile from "./UserProfile";
import { set_authed_user } from "../actions/authedUser";
import QuestionList from "./QuestionList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./AddQuestion";
import { get_questions } from "../actions/Questions";
import NavBar from "./NavBar";
import Poll from "./Poll";
import LoginScreen from "./LoginScreen";
import LeaderBoard from "./LeaderBoard";

const { Header, Footer, Sider, Content } = Layout;
export const App = ({ authedUser = undefined, dispatch }) => {
  useEffect(() => {
    dispatch(get_users());
    dispatch(get_questions());
  }, []);
  const test_empty_object = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  };
  return (
    <Fragment>
      {console.log(`cur authed user is ${JSON.stringify(authedUser)}`)}

      {test_empty_object(authedUser) && <LoginScreen />}
      {!test_empty_object(authedUser) && (
        <Layout>
          <Header>
            <NavBar />
          </Header>
          <Layout
            style={{
              margin: "5px",
            }}
          >
            <Content
              style={{
                margin: "20px",
                width: "1500px",
              }}
            >
              <Routes>
                <Route path="/" element={<QuestionList />} exact />
                <Route path="/AddQuestion" element={<AddQuestion />} exact />
                <Route path="/questions/:id" element={<Poll />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
              </Routes>
            </Content>
            <Sider
              theme="light"
              style={{
                margin: "20px",
              }}
            >
              <UserProfile />
            </Sider>
          </Layout>
        </Layout>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
