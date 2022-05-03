import styled from 'styled-components';
import { maxWidth } from 'styled-system';

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
`;

const StyledDescription = styled.div`
  text-align: center;
  color: grey;
  font-size: 24px;
  ${maxWidth};
`;

export { StyledWrapper, StyledDescription };
