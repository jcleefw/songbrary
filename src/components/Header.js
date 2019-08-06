import * as React from 'react';
import { View } from 'react-sketchapp';

import ds from '../lib/designSystem';

const Header = ({ name, children }) => (
  <View
    name={name}
    style={ds.styled.header}
  >
    <View
      name="My Setlist Icon"
      style={ds.styled.headerIcon}>
      {ds.icons.renderer(80, 80, ds.icons.svg['setlistIcon'].svg)}
    </View>
    {children}
  </View>
);

export default Header;

