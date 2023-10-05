import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native"; // icons que será estilizado


// como toda area vai ser clicada esse container vai ser todo um btn
export const Container = styled(TouchableOpacity)` 
  width: 100%;
  height: 90px;

  background-color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_500 };
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;



//Desta forma importo o theme uma vez só - não esquecer de importar o css e se atentar a sintaxe
export const Title = styled.Text`
  ${({theme} : {theme: any}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200}
  `}
`;


export const Icon = styled(UsersThree).attrs(({theme} : {theme: any}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;