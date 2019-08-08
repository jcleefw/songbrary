import * as React from 'react';
import { View, Text, Svg } from 'react-sketchapp';

import IpadArtboard from '../../components/IpadArtBoard';
import Header from '../../components/Header';
import ds from '../../lib/designSystem';

const Layoutv2 = ({ colors, name }) => (
  <IpadArtboard
    name={name}
    backgroundColor={ds.colors['Night']}
  >
    <Header name="headerv2">
      <View name="button"
        style={ds.styled.headerButton}
      >
        <Text
          name="button text"
          style={ds.styled.headerButtonText}>
          New Setlist
        </Text>
      </View>
    </Header>
  </IpadArtboard >
);

export default Layoutv2