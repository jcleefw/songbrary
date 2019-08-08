import * as React from 'react';
import { Text, View } from 'react-sketchapp';

import ds from '../lib/designSystem';
import IpadArtboard from '../components/IpadArtBoard';


const row = (height, flexGrow) => {
  return Object.assign(
    {},
    ds.flexAlignment['spaceBetween'],
    ds.globalStyle.fullWidth,
    {
      // backgroundColor: ds.colors['Pear'],
      height: height,
      color: ds.colors['Haus'],
      // flexGrow: flexGrow,
    }
  )
}

const column = (width, height) => {
  return Object.assign(
    {},
    ds.flexAlignment['centered'],
    {
      // backgroundColor: ds.colors['Pear Dark'],
      height: height,
      color: ds.colors['Haus'],
      flexDirection: 'column',
      width: width,
      padding: 32
    }
  )
}



const Setlist = ({ name, children }) => (
  <IpadArtboard
    name={name}
    backgroundColor={ds.colors['Night']}
  >
    <View
      style={ds.styled.backHeader}
    >
      {ds.icons.renderer(80, 80, ds.icons.svg['backIcon'].svg)}
    </View>
    <View style={row('auto', 2)}>
      <View style={column(280, 100)}>
        <View
          style={Object.assign(
            {},
            ds.flexAlignment['centered'],
            {
              width: 200,
              height: 200,
              backgroundColor: ds.colors['Light Grey'],
              fontSize: 64,
              marginRight: 40,
              marginLeft: 40
            }
          )}
        >
          <Text style={{ fontSize: '20' }}>{'Setlist Image'}</Text>
        </View>

      </View>
      <View style={column(768 - 300, 'auto')}>
        <View
          style={Object.assign(
            {},
            ds.flexAlignment['centered'],
            {
              width: 768 - 300,
              flexDirection: 'column',
              fontSize: 64,
              marginRight: 40,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              height: 200
            }
          )}
        >
          <Text style={{
            fontSize: 40,
            marginBottom: 20,
            color: ds.colors['White'],
            fontWeight: 'bold',
          }}>
            {'Setlist Title'}
          </Text>

          <Text style={{
            fontSize: 20,
            marginBottom: 20,
            color: ds.colors['Light Grey'],
          }}>
            {'0 Songs'}
          </Text>

          <Text style={{
            fontSize: 16,
            marginBottom: 20,
            color: ds.colors['Light Grey'],
          }}>
            {'Description Lorem Ipsom Description Lorem Ipsom Description Lorem Ipsom  Description Lorem Ipsom '}
          </Text>

          <View
            style={Object.assign(
              {},
              ds.flexAlignment['centered'],
              {}
            )}
          >
            <Text style={{
              fontSize: 16,
              marginBottom: 20,
              color: ds.colors['Light Grey'],
            }}>
              {'Created by '}
            </Text>
            <Text style={{
              fontSize: 16,
              marginBottom: 20,
              color: ds.colors['Peach Dark'],
              fontWeight: 'bold',
            }}>
              {'John Doe '}
            </Text>

            <Text style={{
              fontSize: 16,
              marginBottom: 20,
              color: ds.colors['Light Grey'],
            }}>
              {', Updated on 15 July 2019'}
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={row('50%', 2)}>
      <Text>{'something'}</Text>
    </View>
    <View style={row(128, 1)}>
      <Text>{'something'}</Text>
    </View>
  </IpadArtboard>
);

export default Setlist;