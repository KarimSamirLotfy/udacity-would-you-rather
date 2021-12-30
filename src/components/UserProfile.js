import React, { useEffect } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { DatePicker, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { set_authed_user } from "../actions/authedUser";
const UserProfile = ({ dispatch, authedUser }) => {
  useEffect(() => {
    dispatch(set_authed_user('sarahedo'));
    //dispatch(set_authed_user("johndoe")); // we can now set the user // TODO: change this to be done in the cool little trick called login screen

  }, []);
  return (
    <div>
      <Card>
        <Avatar />
        <h1>curr Id {JSON.stringify(authedUser)}</h1>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

const mapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapStateToProps)(UserProfile);
