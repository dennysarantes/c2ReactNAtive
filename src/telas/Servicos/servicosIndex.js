import { FlatList } from 'react-native';
import Item from './Item/itemIndex';
import TelaPadrao from '../../componentes/TelaPadrao/telaPadrao';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar, nós fazemos."
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
  }
];

export default function Servicos() {
  return <TelaPadrao>
    <FlatList
      data={servicos}
      removeClippedSubviews={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Item dados={item} ehCarrinho={false}  />}
    />
  </TelaPadrao>
}