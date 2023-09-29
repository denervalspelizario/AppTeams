import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";



export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;

`;

// como CaretLeft não é padrão no rn tem que usar essa sintaxe
export const BackIcon = styled(CaretLeft).attrs(
  ({ theme }: { theme: any }) => ({
    color: theme.COLORS.WHITE,
    size: 32
  })
)``;

