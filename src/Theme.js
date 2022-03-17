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
    gradientPrimary: 'linear-gradient(45deg,#C5C5C5, #F9F9F9)',
    gradientSecondaryLight: 'linear-gradient(45deg,#5CA8FF, #909AA3)',
    gradientSecondaryMedium: 'linear-gradient(45deg,#3F95F5, #87BFFF)',
    gradientSecondaryDark: 'linear-gradient(45deg,#1B5DA8, #3F95F5)',
    gradientComplementaryLight: 'linear-gradient(45deg,#F5B440, #F5B440)',
    gradientComplementaryDark: 'linear-gradient(45deg,#A8700A, #F5B440)',
  },
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
