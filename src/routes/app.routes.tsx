import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { NewGroups } from "@screens/NewGroups";
import { Players } from "@screens/Players";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator 
      screenOptions={{
        headerShown : false // removendo a navegação padrão do cabeçalho
      }}
    > 
      <Screen 
        name="groups" //  nome da rota
        component={Groups} // pra onde vai a rota
      />

      <Screen 
        name="players" 
        component={Players} 
      />

      <Screen 
        name="newgroups" 
        component={NewGroups} 
      />
    </Navigator>
  );
}