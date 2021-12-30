import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useParams } from 'react-router';

const Poll = ({authedUser, questions, users}) => {
    const { id = '8xf0y6ziyjabvozdd253nd' } = useLocation().state; // this to get state based on location or url
    const question = questions[id]
    const {author:author_id, optionOne:{text:text_1, votes: votes_1}, optionTwo:{text:text_2, votes:votes_2}} = question
    const author = users[author_id]
    const {avatarURL:author_avatar, name:author_name} = author
    const {avatarURL:user_avatar} = authedUser
    return (
      <div>
        {console.log(question)}
        {console.log(id)}
        {console.log(author_id, text_1, votes_2, author)}
        <h1>WOULD you Rather</h1>
      </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const quesiton_id= props['id']
    const question = questions[quesiton_id]
    console.log(props['id'], question);

    return {
      authedUser,
      questions,
      users,
      question:question,
    };
}


export default connect(mapStateToProps)(Poll)
