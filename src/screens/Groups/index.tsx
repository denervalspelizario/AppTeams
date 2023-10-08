import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native' // pregando as propriedades de navegação
import { Container } from './styles';


import { Header } from '@components/Header';
import { HighLight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);  // state tipado como array de string

  const navigation = useNavigation(); // pegando as propriedades de navigate

  function handleNewGroup(){
    navigation.navigate('newgroups') // indicando para onde a r ota vai
  }

  return (
    <Container>
      <Header />
      <HighLight 
        title='Turmas'  // repasssando os dados de props
        subTitle='jogue com sua turma'
      />  
      
      <FlatList
        data={groups} // dados inicias state groups
        
        keyExtractor={item => item} // como key de referencia seré o item
        
        renderItem={({item}) => (
          <GroupCard title={item} //renderizar(o que vai mostrar) será o component GroupCard que recebe como props os dados de item(os dados da state group)
        />)}
        
        contentContainerStyle={groups.length == 0 && {flex: 1}} // se não tiver dados na state group estiliza com flex 1
        ListEmptyComponent={() => ( // component que será renderizado somente quando NÂO tiver nada para renderizar na state groups
          <ListEmpty message="Que tal cadastrar uma turma?"/>
        )}
      />

      <Button 
        title="Adicionar Equipe"
        onPress={handleNewGroup}
      />
      

    </Container>
  );
}

