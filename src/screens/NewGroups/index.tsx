import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { UsersThree } from 'phosphor-react-native';
import { HighLight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';


export function NewGroups() {

  const navigation = useNavigation()

  function handleNew(){
    navigation.navigate('players', {group: 'Potatos'})
  }

  return (
    <Container>
      <Header 
        showBackButton  // indicando que show é true para renderizar o btn
      />

      <Content>

        <Icon />
        <HighLight 
          title="Nova turma"
          subTitle="crie um time para adicionar pessoas"
        />

        <Input 
          placeholder='Nome da equipe'
        />

        <Button 
          title="Criar"
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
