import {TouchableOpacityProps} from 'react-native';
import {Container, Title, FilterStyleProps} from './styles';


// tipando a Props com as propriedades de btn de filter la do styles e um title
type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

// Sempre lembrando que o ...rest é as outras tipagens além de title neste caso TouchableOpacityProps & FilterStyleProps
export function Filter({title, isActive = false, ...rest}: Props){
  return (
    <Container 
      isActive={isActive}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}