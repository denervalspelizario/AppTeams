import { useState } from 'react';
import { FlatList } from 'react-native';
import {Container, Form, HeaderList, NumbersOfPlayers} from './styles';


import { Header } from '@components/Header';
import { HighLight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';



export function Players(){
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["Denerval", "Pedrão"]);
  
  return(
    <Container>
      <Header showBackButton/>

      <HighLight 
        title="Nome da equipe"
        subTitle="Adicione a galera e separe os times"
      />

      <Form>

        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          type="PRIMARY"
          icon="add"
        />

      </Form>

      <HeaderList >
        <FlatList 
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => ( // renderizando todos itens de data dentro do component Filter
            <Filter 
              title={item}
              isActive={item === team} // se item for igual ao valor da state tema então ele fica ative(troca valor de borda)
              onPress={() => setTeam(item)} // ao clicar no btn altera o valor da state para o valor de item
            />
          )}
          horizontal={true}
        />

        <NumbersOfPlayers>
          {players.length}  
        </NumbersOfPlayers>

      </HeaderList>


      <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => ( // renderizando todos itens de data dentro do component Filter
            <PlayerCard 
              name={item}
              onRemove={() => {}}
            />
          )}
          
        />

    </Container>
  );
}