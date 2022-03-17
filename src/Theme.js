import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primaryBgLight: '#E7E7E7',
    primaryBgMedium: '#DBDBDB',
    secondaryDark: '#1B5DA8',
    secondaryMedium: '#3F95F5',
    secondaryLight: '#5CA8FF',
    complementaryDark: '#A8700A',
    complementaryLight: '#F5B440',
    textPrimaryDark: '#293238',
    textPrimaryMedium: '#4C5E6B',
    textPrimaryLight: '#909AA3',
    textSecondary: '#EDEDED',
  },
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
