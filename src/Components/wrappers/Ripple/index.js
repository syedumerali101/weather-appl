import React from 'react';
// import Ripple from 'react-native-material-ripple';
import {TouchableOpacity} from 'react-native';

const RippleHOC = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[props?.style]}
      rippleColor="gray"
      rippleOpacity={props.rippleOpacity ? props.rippleOpacity : 0.3}>
      {props?.children}
    </TouchableOpacity>
  );
};
export default RippleHOC;
