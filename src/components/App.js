import React from "react";
import { connect } from "react-redux";
import { get_users } from "../actions/users";
import { useEffect } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import UserProfile from "./UserProfile";
import { set_authed_user } from "../actions/authedUser";
import QuestionList from "./QuestionList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from './AddQuestion'
import { get_questions } from "../actions/Questions";
import NavBar from "./NavBar";
import  Poll from "./Poll";



const { Header, Footer, Sider, Content } = Layout;
export const App = (props) => {
  useEffect(() => {
    props.dispatch(get_users());
    props.dispatch(get_questions());

  }, []);
  return (
    <Layout>
      <Layout>
        <Header>
          <NavBar />
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<QuestionList />} exact />
            <Route path="/AddQuestion" element={<AddQuestion />} exact />
            <Route
              path="/questions/:id"
              element={<Poll />}
              
            />
          </Routes>
        </Content>
        <Footer>
          <AddQuestion />
        </Footer>
      </Layout>
      <Sider>
        <UserProfile />
      </Sider>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect()(App);
