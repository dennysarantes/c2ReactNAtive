import React, { useState, useEffect } from 'react';

import {Pressable, View, Text } from 'react-native';

import CampoInteiro from '../../../componentes/CampoInteiro/campoIndex';
import Botao from '../../../componentes/Botao/botaoIndex';

import estilos from './estilo';
import { ConverteParaReal } from '../../../shared/converteParaReal';

export default function Item(dados) {

  const item = dados.dados
  const ehCarrinho = dados.ehCarrinho

  useEffect(() => {
    console.log('componente ITEM carregado');
    }, []);

  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(ehCarrinho ? (item?.preco * item.quantidade ): item?.preco);
  const [expandir, setExpandir] = useState(ehCarrinho);
  //const [precoFormatado, ]

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    //console.log('nova quantidade: ', novaQuantidade)
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * item?.preco);
  }

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  }

  return <>
    <Pressable 
       android_ripple={{color: 'gray', borderless: false}} 
       style={estilos.informacao} onPress={ehCarrinho ? null: inverteExpandir}>
      <Text style={estilos.nome}>{ item?.nome }</Text>
      <Text style={estilos.descricao}>{ item?.descricao }</Text>
      <Text style={estilos.preco}>{ConverteParaReal({value: item?.preco})}</Text>
    </Pressable >
    {(expandir || ehCarrinho) &&
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro  estilos={estilos.quantidade} valor={ehCarrinho ? item.quantidade : quantidade} acao={atualizaQuantidadeTotal} editable={!ehCarrinho}/>
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total:</Text>
            <Text style={estilos.preco}>{ConverteParaReal({value: total})}</Text>
          </View>
        </View>
        <Botao label={ehCarrinho ? 'Remover do carrinho' :"Adicionar ao carrinho"} acao={() => {}} />
      </View>
    }
    <View style={estilos.divisor} />
  </>
}