import {Container, Icon, Title} from './styles';
import { TouchableOpacityProps } from 'react-native';  // importando a tipagem de um btn

// Props tipo Touch E title - ou seja agora GroupCard precisa de um title e FUNCIONA como um btn com todas as suas propriedades
type Props = TouchableOpacityProps & {
  title: string;
}


export function GroupCard({ title, ...rest }: Props){ // ...rest = propriedades do Touch
  return(
    <Container {...rest}>  
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  )
}