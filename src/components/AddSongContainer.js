import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View, Svg } from 'react-sketchapp';

import ds from '../lib/designSystem';

const AddSongContainer = ({ name, children }) => {
  let icons = ds.icons.svg
  let addSongsIcons = [icons.createNew, icons.identifySong, icons.captureImage]
  return (<View
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
    {addSongsIcons.map(icon => (
      <View key={icon.title}
        name={`${icon.key}`}
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
          {ds.icons.renderer(100, 100, icon.svg)}
        </View>
        <Text>{icon.title}</Text>
      </View>
    ))}
  </View>
  )
};

export default AddSongContainer;