import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View, Svg } from 'react-sketchapp';

import ds from '../lib/designSystem';

const AddSongContainer = ({ name, children }) => (
  <View
    name={name}
    style={Object.assign(
      {},
      ds.flexAlignment['spaceBetween'],
      {
        width: '100%',
        backgroundColor: ds.colors['Haus'],
      }
    )}
  >
    {Object.keys(ds.icons.svg).map(icon => (
      <View key={ds.icons.svg[icon].title}
        name="create-new-icon"
        style={Object.assign(
          {},
          ds.flexAlignment['centered'],
          {
            width: '33.333%',
            height: '180',
            padding: 32,
            borderRightWidth: 1,
            borderColor: ds.colors['Night'],
            flexDirection: 'column',
          }
        )}
      >
        <View
          style={Object.assign(
            {},
            ds.flexAlignment['centered'],
            {
              width: '100%',
              height: '100%'
            }
          )}
        >
          {ds.icons.renderer(100, 100, ds.icons.svg[icon].svg)}
        </View>
        <Text>{ds.icons.svg[icon].title}</Text>
      </View>
    ))}
  </View>
);

export default AddSongContainer;