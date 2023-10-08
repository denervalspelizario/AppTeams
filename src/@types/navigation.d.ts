export declare global { // fazendo a tipagem global
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;    // definindo a tipagem da rota como groups não tem parametro então será undefined
      newgroups: undefined;
      players: {            // no caso de players vai ter o parametro do nome da equipe ou grupo então o parametro tera nome de group e será uma string
        group: string;
      }
    }
  }
}