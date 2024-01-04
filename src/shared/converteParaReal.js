export function ConverteParaReal({value, acao}){

    const novoValor =  Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
      }).format(value)

    //acao(novoValor);

    return novoValor;
}