
import './ReactotronConfig'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { NavigationContainer } from '@react-navigation/native';

import Servicos from './src/telas/Servicos/servicosIndex';
import Carrinho from './src/telas/Carrinho/carrinhoIndex';
import Rotas from './src/Routes/rotas';

export default function App() {
  return <NavigationContainer>
    <Rotas/>
  </NavigationContainer>
}