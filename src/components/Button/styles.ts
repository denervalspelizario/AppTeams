import styled from "styled-components/native";
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


export const Title = styled.Text`
  font-size: ${({theme} : {theme : any}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme} : {theme : any}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme} : {theme: any}) => theme.COLORS.WHITE}
`;

