import Text from "antd/lib/typography/Text";
import { connect } from "react-redux";
import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { saveQuestion } from "../actions/Questions";
import questions from "../reducers/questions";
import { _getQuestions } from "../utils/_DATA";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const AddQuestion = ({dispatch, authedUser}) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Options to choose from", values);
    // here we dispatch the action 
    let quesition_obj = {
      authedUser,
      optionOne: values["optionOne"],
      optionTwo: values["optionTwo"],
    };
    console.log(`user: ${authedUser["id"]} add question ${JSON.stringify(quesition_obj)}`);

    dispatch(saveQuestion(quesition_obj));

    console.log(`${JSON.stringify(await _getQuestions())}`)
  };
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="Create new Question"
        onFinish={onFinish}
      >
        <Text>Would You rather</Text>
        <Form.Item
          name="optionOne"
          label="Option One"
          rules={[
            {
              required: true,
              message: "Please input Option 1",
            },
          ]}
        >
          <Input placeholder="option 1" />
        </Form.Item>
        <Form.Item
          name="optionTwo"
          label="Option Two"
          rules={[
            {
              required: true,
              message: "Please input Option 2",
            },
          ]}
        >
          <Input placeholder="option 2" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add New Question
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
    authedUser:state.authedUser,
    questions:state.questions
});



export default connect(mapStateToProps)(AddQuestion);
