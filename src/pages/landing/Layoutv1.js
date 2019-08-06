import * as React from 'react';
import { View, Text, Svg } from 'react-sketchapp';

import IpadArtboard from '../../components/IpadArtBoard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ds from '../../lib/designSystem';

const Layoutv1 = ({ colors }) => (
  <IpadArtboard
    name="layout 1"
    backgroundColor={ds.colors['Night']}
  >
    <Header name="headerv1" />
    <Footer />
  </IpadArtboard >
);

export default Layoutv1