import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View, Artboard } from 'react-sketchapp';

const IpadArtboard = ({ name, children }) => (
  <Artboard
    name={name}
    style={{
      width: 768,
      height: 1024,
      marginBottom: 50,
      padding: 0
    }}
  >
    {children}
  </Artboard>

);

export default IpadArtboard;