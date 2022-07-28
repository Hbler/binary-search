// assinatura da função
// function localizarCarta(cartas, numN) {}

// Dica básica sobre a assinatura:
// - nomeie a função e as variáveis de forma apropriada,
//   para evitar confsão ao longo do desenvolvimento.

// // versão 01
// export function localizarCarta(cartas, numN) {
//   // Criar um loop para repetição
//   for (let posicao in cartas) {
//     // verificar se o elemento atual é igual à numN
//     if (cartas[posicao] === numN) {
//       // Resposta encontrada! Return e encerrar a função...
//       return posicao;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// }

// versão 01.1
// export function localizarCarta(cartas, numN) {
//   // Criar um loop para repetição
//   for (let posicao = 0; posicao < cartas.length; posicao++) {
//     // verificar se o elemento atual é igual à numN
//     if (cartas[posicao] === numN) {
//       // Resposta encontrada! Return e encerrar a função...
//       return posicao;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// }

// versão 02
// const localizarCarta = (cartas, numN) => {
//   // verificamos se o array está vazio e retornamos -1
//   if (cartas.length === 0) return -1;

//   let ini = 0;
//   let fim = cartas.length;

//   // Criar um loop para repetição
//   while (ini <= fim) {
//     //encontrar o meio da lista
//     let posicao = Math.floor((ini + fim) / 2); // o meio
//     let cartaAtual = cartas[posicao];

//     // verificar se encontramos
//     if (cartaAtual === numN) {
//       return posicao;
//       // verificar se passamos do numN
//     } else if (cartaAtual < numN) {
//       fim = posicao - 1;
//       // verificar se estamos antes do numN
//     } else if (cartaAtual > numN) {
//       ini = posicao + 1;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// };

const testarPosicao = (arr, num, index) => {
  const carta = arr[index];

  // verificar se posicao atual contém o numN
  if (carta === num) {
    // verificar se o índice anterior também contém o numN
    // se tiver retornamos antes, para avisar que ainda não aachamos a primeira ocorrencia
    // se não, retornamos achou, para avisar que é a primeira ocorrência
    return index - 1 >= 0 && arr[index - 1] === num ? "antes" : "achou";
  } // verifica se posicao atual é menor que o numN
  else if (carta < num) {
    // se for retornamos antes, para avisar que ainda achamos o numN
    // e temos que procurar antes dessa posicao
    return "antes";
  } else {
    // se não for retornamos depois, para avisar que ainda achamos o numN
    // e temos que procurar depois dessa posicão
    return "depois";
  }
};

// versão 02.1
export const localizarCarta = (cartas, numN) => {
  // verificamos se o array está vazio e retornamos -1
  if (cartas.length === 0) return -1;

  let ini = 0;
  let fim = cartas.length;

  // Criar um loop para repetição
  while (ini <= fim) {
    //encontrar o meio da lista
    let posicao = Math.floor((ini + fim) / 2); // o meio
    let resultado = testarPosicao(cartas, numN, posicao);

    // verificar se encontramos
    if (resultado === "achou") {
      return posicao;
    } else if (resultado === "antes") {
      fim = posicao - 1;
    } else if (resultado === "depois") {
      ini = posicao + 1;
    }
  }
  // loop acabou e não encerrou a função; enceraremos retornando o -1
  return -1;
};

// array de testes
export const testes = [
  {
    entrada: {
      cartas: [13, 12, 11, 7, 4, 3, 1, 0],
      numN: 7,
    },
    saida: 3,
  },
  {
    // O numN está em algum ponto no meio da lista cartas.
    entrada: {
      cartas: [13, 11, 10, 7, 4, 3, 1, 0],
      numN: 3,
    },
    saida: 5,
  },
  {
    // O numN é o primeiro elemento da lista cartas.
    entrada: {
      cartas: [4, 2, 1, -1],
      numN: 4,
    },
    saida: 0,
  },
  {
    // O numN é o último elemento da lista cartas.
    entrada: {
      cartas: [3, -1, -9, -127],
      numN: -127,
    },
    saida: 3,
  },
  {
    // A lista cartas tem apenas um elemento, que é o numN.
    entrada: {
      cartas: [6],
      numN: 6,
    },
    saida: 0,
  },
  {
    // A lista cartas não contém o numN.
    entrada: {
      cartas: [9, 7, 5, 2, -9],
      numN: 4,
    },
    saida: -1, // Como o problema não especifica essa situação, definimos um valor arbitrário
  },
  {
    // A lista cartas está vazia.
    entrada: {
      cartas: [],
      numN: 7,
    },
    saida: -1,
  },
  {
    // A lista cartas tem números que se repetem.
    entrada: {
      cartas: [8, 8, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
      numN: 3,
    },
    saida: 7,
  },
  {
    // O numN está em mais de uma posição na lista cartas.
    entrada: {
      cartas: [8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
      numN: 6,
    },
    saida: 2,
  },
];
