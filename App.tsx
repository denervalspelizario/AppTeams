import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';
import { Groups } from '@screens/Groups';
import { NewGroups } from '@screens/NewGroups';
import theme from './src/theme'
import { Players } from '@screens/Players';



export default function App() {

  const [fonstLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fonstLoaded ? <Players /> : <Loading/> }
    </ThemeProvider>
  );
}


/*
 Obs: As fontes do google são assincronas então para garantir que ela sejam carregandas na aplicacao faz um ifternario
      indicando que se fonstLoaded(chegou os dados da font) estiver true carrega a aplicacao senão carrega um load
*/
