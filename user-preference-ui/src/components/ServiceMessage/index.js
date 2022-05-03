import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledDescription } from './styles';

const { Title } = Typography;

const ServiceMessage = ({ imgUrl, title, description, children, maxWidth, heading, ...props }) => (
  <StyledWrapper center column {...props}>
    {heading && (
      <Title color="grey.500" fontSize="36px" mb={10}>
        {heading}
      </Title>
    )}
    <Title color="grey.500" fontSize="36px" mb={10}>
      {title}
    </Title>
    <StyledDescription maxWidth={maxWidth}>{description}</StyledDescription>
    <div>{children}</div>
  </StyledWrapper>
);

ServiceMessage.propTypes = {
  imgUrl: PropTypes.string,
  heading: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  maxWidth: PropTypes.number,
};

ServiceMessage.defaultProps = {
  maxWidth: 780,
  imgUrl: null,
  heading: null,
  title: null,
  description: null,
  children: null,
};

export default ServiceMessage;
