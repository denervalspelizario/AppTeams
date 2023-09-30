import {Container, Title, SubTitle} from './styles';

type Props = {  // estrutura de props
  title: string;
  subTitle: string
}

export function HighLight({title, subTitle}: Props){ 
  return(
    <Container>
      
      <Title>
        {title}
      </Title>
      
      <SubTitle>
        {subTitle}
      </SubTitle>
    
    </Container>
  )
}