import React, {TextInput} from 'react-native';

import _ from 'lodash';

var OldTextInput = TextInput;

const baseFont = {
  ...Platform.select({
       ios: { fontFamily: 'Arial', },
       android: { fontFamily: 'Roboto', }
  })
};

class MyTextInput extends OldTextInput {
  defaultProps = {};
  render() {
    var props = _.clone(this.props);

    if (_.isArray(this.props.style)){
      props.style.push(baseFont);
    } else if (props.style) {
      props.style = [props.style, baseFont];
    } else {
      props.style = {baseFont};
    }

    this.props = props;

    return super.render();
  };
}

export default MyTextInput;
