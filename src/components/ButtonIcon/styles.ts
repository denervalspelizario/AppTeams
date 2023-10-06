import styled from "styled-components/native";
import { TouchableOpacity } from "react-native"; // sempre bom lembrar na estilizacao importa o component no tsx importa as propriedades do component
import { MaterialIcons } from '@expo/vector-icons'; // usando icons que já vem pre instalado


// criando um tipo que pode se tanto PRIMARY quanto SECONDARY
export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'  

type Props = {
    type: ButtonIconTypeStyleProps
}


// criando um container com propriedades de um btn
export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`;

// icon recebe as propriedades de um icon da biblioteca vector-icons que tamanho será 24 e cor sera de acordo com o type passado
export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK 
}))``;


