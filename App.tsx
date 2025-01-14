import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from 'src/theme';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

// themeprovider sendo compartilhado por toda aplicacao atraves do styled