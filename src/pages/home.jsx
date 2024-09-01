import React from "react";
import { Result } from "antd";
import { CrownOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <div style={{ padding: "28px" }}>
      <Result icon={<CrownOutlined />} title="FullStack JS - JWT" />
    </div>
  );
};

export default HomePage;
