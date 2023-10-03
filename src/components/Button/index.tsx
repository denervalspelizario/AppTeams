import {Container, Title, ButtonTypeStyleProps} from './styles'; // importando os estilos e a tipagem(ButtonTypeStyleProps)
import { TouchableOpacityProps } from 'react-native'; 

// props tipada com propriedades de um button que tem que receber uma title string e um tipo(opcional que é o estilo que pode ser verde ou vermelho)
type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
}

// component Button recebe a tipagem props e pode default inicia com tipo PRIMARY, rest para acessar qualquer propriedade que não foi deixada implicitá
export function Button({title, type = 'PRIMARY', ...rest}: Props){ 
  return(
    <Container 
      {...rest}
      type={type} // definindo que container recebe type(color)
    >
      <Title>
        {title}
      </Title>  
    </Container>
  );
}