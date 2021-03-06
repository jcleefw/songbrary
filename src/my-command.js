import sketch from 'sketch';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Artboard, Page, View, Image } from 'react-sketchapp';

import Swatch from './components/Swatch';
import AddSongContainer from './components/AddSongContainer';
import IpadArtboard from './components/IpadArtBoard';
import Header from './components/Header';
import ds from './lib/designSystem';

const Document = ({ colors }) => (
  <Page>
    <AddSongContainer name="add-song-container" />
    <IpadArtboard name="ipad artboard" >
      <Header name="header container" />
    </IpadArtboard>

    <Artboard
      name="Swatches"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (96 + 8) * 4,
        padding: 0,
      }}
    >
      {Object.keys(colors).map(color => (
        <Swatch name={color} hex={colors[color]} key={color} />
      ))}
    </Artboard>
  </Page >
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  render(<Document colors={ds.colors} />, sketch.getSelectedDocument().selectedPage);
};
