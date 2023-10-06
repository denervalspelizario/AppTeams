import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Name} from './styles';
import { ButtonIcon } from '@components/ButtonIcon';


// Pops tipada com name(string) e uma funcao que não tem retorno(void)
type Props = {
  name: string;
  onRemove: () => void;
}

// Sempre lembrando que o ...rest é as outras tipagens além de title neste caso TouchableOpacityProps & FilterStyleProps
export function PlayerCard({ name, onRemove }: Props){
  return (
    <Container>
      <Icon 
        name="person"
      />

      <Name>
        {name}
      </Name>

      <ButtonIcon 
        icon="close"
        type='SECONDARY'
        onPress={onRemove}
      />
    </Container>
  )
} 