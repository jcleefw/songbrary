import * as React from 'react';
import { Artboard } from 'react-sketchapp';

import ds from '../lib/designSystem';

const IpadArtboard = ({ name, backgroundColor, children }) => (
  <Artboard
    name={name}

    style={Object.assign(
      {},
      ds.flexAlignment['spaceBetween'],
      {
        width: 768,
        height: 1024,
        marginBottom: 50,
        padding: 0,
        backgroundColor: backgroundColor,
        flexDirection: 'column',
      }
    )}

  >
    {children}
  </Artboard>

);

export default IpadArtboard;