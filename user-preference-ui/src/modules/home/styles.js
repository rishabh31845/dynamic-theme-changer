import { Card, Row } from "antd";
import styled from "styled-components";
import { PRIMARY } from "theme";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  overflow: hidden;
`;

const StyledRow = styled(Row)`
  margin: 8px;
  padding: 12px;
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    background: ${PRIMARY};
  }
`;

export { StyledContainer, StyledRow, StyledCard };
