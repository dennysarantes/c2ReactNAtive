import { FlatList, Text } from 'react-native';
import Item from '../Servicos/Item/itemIndex';
import TelaPadrao from '../../componentes/TelaPadrao/telaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho/statusCarrinho';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar, nós fazemos.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantidade: 2
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantidade: 3
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <TelaPadrao>
    <StatusCarrinho total={total} />
    <FlatList
      data={servicos}
      removeClippedSubviews={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Item dados={item} ehCarrinho={true}  />}
    />
  </TelaPadrao>
}