
import { useNavigation } from "@react-navigation/native";
import {Container, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;  // tipo opcional e boolean
}

export function Header({showBackButton = false}: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('groups');
  }

  return(
    <Container>
      {
        showBackButton &&  // condicional se show for true renderiza o btn
        <BackButton  onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }

      <Logo  source={LogoImg} />
    </Container>
  )  
}