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
      style={Object.assign(
        {},
        ds.flexAlignment['centered'],
        {
          width: '80%',
          height: '64',
          backgroundColor: ds.colors['Pear'],
        }
      )}
    >
      <Text
        style={{
          fontSize: '24',
          width: '100%',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}
      >
        New Setlist</Text>
    </View>
  </View >
);

export default Footer;

