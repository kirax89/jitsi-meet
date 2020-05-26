import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ViewPropTypes
} from 'react-native';

const baseStyle = {
  ...Platform.select({
       ios: { fontFamily: 'Arial', },
       android: { fontFamily: 'Roboto', }
  })
};

const MyText = ({ style, children, ...props }) => {
  let newStyle;
  if (Array.isArray(style)) {
    newStyle = [baseStyle, ...style];
  } else {
    newStyle = [baseStyle, style];
  }

  return (
     <Text {...props} style={newStyle}>
       {children}
     </Text>
  );
};

MyText.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

MyText.defaultProps = {
  style: {},
};

export default MyText;
