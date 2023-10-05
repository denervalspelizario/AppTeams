import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'; // tipagem de estilo o primary será um estilo e secondary outro

type props = {
  type: ButtonTypeStyleProps
}

// Container que será um botão - e tipando com props que pode ser PRIMARY ou SECONDARY
// a condicional no color a baixo está num if ternário e indica se props for PRIMARY sera uma cor senão sera outra
export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK)};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

//Desta forma importo o theme uma vez só - não esquecer de importar o css e se atentar a sintaxe
export const Title = styled.Text`
  ${({theme} : {theme: any}) =>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE}
  `}
`;

