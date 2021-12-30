import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Select } from "antd";
import { set_authed_user } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
const { Option } = Select;

export const LoginScreen = ({ users = {}, dispatch }) => {
  // console.log(`users are ${JSON.stringify(users)}`)
  const [toHome, setToHome] = useState(false);
  let navigate = useNavigate();

  function onChange(value) {
    console.log(`selected user is ${value}`);
    dispatch(set_authed_user(value));
    //navigate("../", { replace: true });
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <Select
          style={{ width: 200 }}
          size="large"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
         
        >
          {Object.keys(users).map((user_id) => {
            let user = users[user_id];
            return (
              <Option key={user_id} value={user["id"]}>
                <Avatar src={user["avatarURL"]} />
                {user["name"]}
              </Option>
            );
          })}
        </Select>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(LoginScreen);
