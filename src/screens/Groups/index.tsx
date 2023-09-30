import { Header } from '@components/Header';
import { Container } from './styles';
import { HighLight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight 
        title='Turmas'  // repasssando os dados de props
        subTitle='jogue com sua turma'
      />  
      <GroupCard 
        title='Team MIBR'
      
      />
    </Container>
  );
}

