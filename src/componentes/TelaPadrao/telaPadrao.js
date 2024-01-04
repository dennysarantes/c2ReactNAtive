import estilos from '../../estilos';
import { SafeAreaView, StatusBar } from 'react-native';

export default function TelaPadrao({ children }) {
    return <SafeAreaView style={estilos.preencher}>
    <StatusBar backgroundColor={'#694fad'} />
        {children}
  </SafeAreaView>

}