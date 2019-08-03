import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View } from 'react-sketchapp';

const Swatch = ({ name, hex }) => (
    <View
      name={`Swatch ${name}`}
      style={{
        height: 96,
        width: 96,
        margin: 4,
        backgroundColor: hex,
        padding: 8,
      }}
    >
      <Text name="Swatch Name" style={{ color: '#FFF', fontWeight: 'bold' }}>
        {name}
      </Text>
      <Text name="Swatch Hex" style={{ color: '#FFF' }}>
        {hex}
      </Text>
    </View>
  );
  
  const Color = {
    hex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  
  Swatch.propTypes = Color;

  export default Swatch;