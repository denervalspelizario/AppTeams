
import {Container, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;  // tipo opcional e boolean
}

export function Header({showBackButton = false}: Props){
  return(
    <Container>
      {
        showBackButton &&  // condicional se show for true renderiza o btn
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo  source={LogoImg} />
    </Container>
  )  
}