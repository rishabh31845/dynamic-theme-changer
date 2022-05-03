import React, { useEffect, useState } from "react";
import { Col, message, Spin } from "antd";
import { StyledContainer, StyledRow, StyledCard } from "./styles";

const Home = ({ userData }) => {
  return (
    <StyledContainer>
      <StyledRow gutter={12}>
        <Col span={12}>
          <StyledCard title="User Name" bordered={false}>
            {userData.name}
          </StyledCard>
        </Col>
        <Col span={12}>
          <StyledCard title="User Email" bordered={false}>
            {userData.emailId}
          </StyledCard>
        </Col>
      </StyledRow>
      <StyledRow gutter={12}>
        <Col span={12}>
          <StyledCard title="User Configuration Key" bordered={false}>
            {userData.userConfiguration[0].configKey}
          </StyledCard>
        </Col>
        <Col span={12}>
          <StyledCard title="User Configuration Value" bordered={false}>
            {userData.userConfiguration[0].configValue}
          </StyledCard>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default Home;
