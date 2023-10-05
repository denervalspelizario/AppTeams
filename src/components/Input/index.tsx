import {Container,} from './styles';
import { TextInputProps } from 'react-native'; // pegando as propriedades de TextInput
import { useTheme } from 'styled-components/native'; // useTheme faz com que tenhamos acessado as dados de theme


// passando ao component Input as propriedades de textinput
export function Input({...rest}: TextInputProps){  

  const { COLORS } = useTheme(); // como useTheme tem os dados de theme consigo por desestruturação pegar o COLORS e usar




  return(
    <Container 
      placeholderTextColor={COLORS.GRAY_300} // estilizando cor ao texto do placeholder
      {...rest}
    />
    
  )
}