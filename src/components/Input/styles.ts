import styled, {css} from "styled-components/native";
import { TextInput } from "react-native"; // importando input

// Container será um input
export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  ${({theme} : {theme: any}) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
