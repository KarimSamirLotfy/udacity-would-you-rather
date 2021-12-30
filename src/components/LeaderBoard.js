import { List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Text from "antd/lib/typography/Text";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { get_users } from "../actions/users";

const LeaderBoard = ({ dispatch, users }) => {
  useEffect(() => {
    dispatch(get_users());
  }, []);
  const create_users_array = () => {
    let all_users = Object.keys(users)
      .sort((key_a, key_b) => {
        const user_a = users[key_a];
        const user_b = users[key_b];
        let sum_a =
          Object.keys(user_a.answers).length + user_a.questions.length;
        let sum_b =
          Object.keys(user_b.answers).length + user_b.questions.length;

        return sum_b - sum_a;
      })
      .map((key) => {
        const user = users[key];
        return user;
      });
    console.dir(`users array = ${all_users}`);
    return all_users;
  };

  return (
    <div>
      {console.log(users)}
      {}
      <List
        itemLayout="horizontal"
        dataSource={create_users_array()}
        renderItem={(user) => {
            const { avatarURL, id, name, answers, questions } = user;
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={avatarURL} />}
                title={<a href="https://ant.design">{name}</a>}
                description={`Answered ${Object.keys(answers).length} and asked ${questions.length}`}
              />
            </List.Item>
          );
        }}
      />
      ,
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(LeaderBoard);
