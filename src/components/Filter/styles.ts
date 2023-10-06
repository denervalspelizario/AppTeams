import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native"; // importando input

// tipagem que vai ser um booelan que se tiver ativado vai mudar a cor da borda
export type FilterStyleProps = {
  isActive?: boolean
}


export const Title = styled.Text`
   text-transform: uppercase;

   ${({theme} : {theme: any}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `} 

`;


// Container com propriedade btn tipado com FilterStyleProps
// se isActive estiver true  borda será green_700 se for false borda não sera estilizada
export const Container = styled(TouchableOpacity) <FilterStyleProps>`
   ${({theme, isActive}) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700}
  `};
  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;



