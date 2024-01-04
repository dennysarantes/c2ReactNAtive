import React from 'react';

import { View, Text } from 'react-native';

import Botao from '../Botao/botaoIndex';
import estilos from './estilosStatusCarrinho';
import { ConverteParaReal } from '../../shared/converteParaReal';

export default function StatusCarrinho({ total }) {

  return <View style={estilos.conteudo}>
    <View style={estilos.total}>
      <Text style={estilos.descricao}>Total do Carrinho:</Text>
      <Text style={estilos.valor}>{ConverteParaReal({value: total})}</Text>
    </View>
    <View style={estilos.botao}>
      <Botao label='Concluir Pedido' invertido />
    </View>
  </View>
}