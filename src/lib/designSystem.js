import icons from './icons';
import { StyleSheet } from 'react-sketchapp';

export const colors = {
  Haus: '#F3F4F4',
  'Light Grey': '#D8D8D8',
  Night: '#333',
  Sur: '#96DBE4',
  'Sur Dark': '#24828F',
  Peach: '#EFADA0',
  'Peach Dark': '#E37059',
  Pear: '#93DAAB',
  'Pear Dark': '#2E854B',
  White: '#FFFFFF'

};

export const flexAlignment = {
  centered: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export const globalStyle = {
  fullWidth: {
    width: '100%'
  }
}

export const styled = StyleSheet.create({

  primaryButton: Object.assign(
    {},
    flexAlignment['centered'],
    {
      width: '80%',
      height: '64',
      backgroundColor: colors['Pear'],
    }
  ),
  primaryButtonText: {
    fontSize: '24',

    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  headerButton: {
    width: '50%',
    height: 16 * 6,
    backgroundColor: colors['Light Grey'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerButtonText: {
    color: colors['Night'],
    textAlign: 'center',
    fontSize: 32,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 128,
    backgroundColor: colors['Peach'],
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  headerIcon: Object.assign(
    {},
    flexAlignment['centered'],
    {
      width: 16 * 8,
      height: 16 * 8,
    }
  ),
  backHeader: Object.assign(
    {},
    flexAlignment['space-between'],
    globalStyle.fullWidth,
    {
      alignItems: 'flex-start',
    }
  ),
})

export default {
  colors,
  flexAlignment,
  icons,
  globalStyle,
  styled
}