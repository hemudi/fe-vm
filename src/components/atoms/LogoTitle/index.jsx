import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/atoms/LogoTitle/LogoTitle.style';

const LogoTitle = ({ contents, ...props }) => {
  return <Styled.Title {...props}>{contents}</Styled.Title>;
};

LogoTitle.defaultProps = {
  contents: 'Hem Store',
};

LogoTitle.propTypes = {
  contents: PropTypes.string,
};

export default LogoTitle;
