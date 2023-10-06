
import {Container, Icon, ButtonIconTypeStyleProps} from './styles';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // usando icons que já vem pre instalado


// tipado com propriedades de btn  e tera dois item icon tipado com icons do MaterialIcons(obrigatorio) e o type(Opcional)
type Props = TouchableOpacityProps & { 
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps

}


// fazendo o component tipado com propriedades de btn, com type e todo o resto das propriedades de btn(Touch)
export function ButtonIcon({ icon, type = 'PRIMARY',...rest }: Props){ 
  return(
    <Container>
      <Icon 
        name={icon} // icon dinamico
        type={type} // indicando o tipo dinamico
      />
     
    </Container>
  );
}