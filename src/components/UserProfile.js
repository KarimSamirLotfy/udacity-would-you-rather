import React, { useEffect } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { DatePicker, Card, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { set_authed_user, logout } from "../actions/authedUser";
import { useNavigate } from "react-router";
const UserProfile = ({ dispatch, authedUser }) => {
  const {avatarURL, name} = authedUser
  useEffect(() => {
    //dispatch(set_authed_user('sarahedo'));
    //dispatch(set_authed_user("johndoe")); // we can now set the user // TODO: change this to be done in the cool little trick called login screen
  }, []);
  const navigate=useNavigate()
  return (
    <div>
      <Card >
        <Avatar src={avatarURL} />
        <h1>{name}</h1>
        <Button
          onClick={(ev) => {
            dispatch(logout());
            navigate("../", { replace: true });
          }}
        >
          Log Out
        </Button>
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
