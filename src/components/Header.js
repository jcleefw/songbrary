import * as React from 'react';
import { View } from 'react-sketchapp';

import ds from '../lib/designSystem';

const Header = ({ name }) => (
  <View
    name="header"
    style={Object.assign(
      {},
      ds.flexAlignment['spaceBetween'],
      {
        width: '100%',
        height: 128,
        backgroundColor: ds.colors['Peach'],
      }
    )}
  >
    <View
      name="My Setlist Icon"
      style={{
        width: 16 * 8,
        height: 16 * 8,
        backgroundColor: ds.colors['Haus'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {ds.icons.renderer(80, 80, ds.icons.svg['setlistIcon'].svg)}
    </View>
    <View
      name="My Setlist Icon"
      style={{
        width: 16 * 8,
        height: 16 * 8,
        backgroundColor: ds.colors['Night']
      }}>
    </View>
  </View>
);

export default Header;

