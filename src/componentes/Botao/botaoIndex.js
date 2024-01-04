import React from "react";

import { TouchableOpacity, Text } from "react-native";
import funcaoEstilosPadrao from "./estilos";

export default function Botao({
  pequeno = false,
  invertido = false,
  label,
  acao,
  estilos,
}) {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

  return (
    <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
      <Text style={estilosPadrao.valor}>{label}</Text>
    </TouchableOpacity>
  );
}
