import icons from './icons';

export const colors = {
  Haus: '#F3F4F4',
  Night: '#333',
  Sur: '#96DBE4',
  'Sur Dark': '#24828F',
  Peach: '#EFADA0',
  'Peach Dark': '#E37059',
  Pear: '#93DAAB',
  'Pear Dark': '#2E854B',
  'Light Grey': '#D8D8D8',
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

export default {
  colors,
  flexAlignment,
  icons
}