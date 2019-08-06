import * as React from 'react';
import { View, Text } from 'react-sketchapp';

import ds from '../lib/designSystem';

const Footer = ({ name }) => (
  <View name="Footer Container"
    style={Object.assign(
      {},
      ds.flexAlignment['centered'],
      { height: 128 }
    )}
  >
    <View
      name="New Setlist button"
      style={ds.styled.primaryButton}
    >
      <Text
        style={ds.styled.primaryButtonText}
      >
        New Setlist</Text>
    </View>
  </View >
);

export default Footer;

