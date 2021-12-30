import { Button, Result } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function error404() {
  const navigate = useNavigate();
  useEffect(() => {
      navigate('../error404')
      
  }, [])
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              navigate("../");
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
}
