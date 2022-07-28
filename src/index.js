// assinatura da função
// function localizarCarta(cartas, pesquisa) {}

// Dica básica sobre a assinatura:
// - nomeie a função e as variáveis de forma apropriada,
//   para evitar confsão ao longo do desenvolvimento.

// // versão 01
// export function localizarCarta(cartas, pesquisa) {
//   // Criar um loop para repetição
//   for (let posicao in cartas) {
//     // verificar se o elemento atual é igual à pesquisa
//     if (cartas[posicao] === pesquisa) {
//       // Resposta encontrada! Return e encerrar a função...
//       return posicao;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// }

// versão 01.1
export function localizarCartaLinear(cartas, pesquisa) {
  // Criar um loop para repetição
  for (let posicao = 0; posicao < cartas.length; posicao++) {
    // verificar se o elemento atual é igual à pesquisa
    if (cartas[posicao] === pesquisa) {
      // Resposta encontrada! Return e encerrar a função...
      return posicao;
    }
  }
  // loop acabou e não encerrou a função; enceraremos retornando o -1
  return -1;
}

// versão 02
// const localizarCarta = (cartas, pesquisa) => {
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
//     if (cartaAtual === pesquisa) {
//       return posicao;
//       // verificar se passamos do pesquisa
//     } else if (cartaAtual < pesquisa) {
//       fim = posicao - 1;
//       // verificar se estamos antes do pesquisa
//     } else if (cartaAtual > pesquisa) {
//       ini = posicao + 1;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// };

// const testarPosicao = (arr, num, index) => {
//   const carta = arr[index];

//   // verificar se posicao atual contém a pesquisa
//   if (carta === num) {
//     // verificar se o índice anterior também contém a pesquisa
//     // se tiver retornamos antes, para avisar que ainda não achamos a primeira ocorrencia
//     // se não, retornamos achou, para avisar que é a primeira ocorrência
//     return index - 1 >= 0 && arr[index - 1] === num ? "antes" : "achou";
//   } // verifica se posicao atual é menor que a pesquisa
//   else if (carta < num) {
//     // se for retornamos antes, para avisar que ainda achamos a pesquisa
//     // e temos que procurar antes dessa posicao
//     return "antes";
//   } else {
//     // se não for retornamos depois, para avisar que ainda achamos a pesquisa
//     // e temos que procurar depois dessa posicão
//     return "depois";
//   }
// };

// versão 02.1
// export const localizarCarta = (cartas, pesquisa) => {
//   // verificamos se o array está vazio e retornamos -1
//   if (cartas.length === 0) return -1;

//   let ini = 0;
//   let fim = cartas.length;

//   // Criar um loop para repetição
//   while (ini <= fim) {
//     //encontrar o meio da lista
//     let posicao = Math.floor((ini + fim) / 2); // o meio
//     let resultado = testarPosicao(cartas, pesquisa, posicao);

//     // verificar se encontramos
//     if (resultado === "achou") {
//       return posicao;
//     } else if (resultado === "antes") {
//       fim = posicao - 1;
//     } else if (resultado === "depois") {
//       ini = posicao + 1;
//     }
//   }
//   // loop acabou e não encerrou a função; enceraremos retornando o -1
//   return -1;
// };

// Algoritmo genérico da pesquisa binária
function pesquisaBinaria(ini, fim, condicao) {
  if (ini === fim) return -1;

  while (ini <= fim) {
    let posicao = Math.floor((ini + fim) / 2);
    let resultado = condicao(posicao);

    if (resultado === "achou") {
      return posicao;
    } else if (resultado === "antes") {
      fim = posicao - 1;
    } else {
      ini = posicao + 1;
    }
  }

  return -1;
}

export const localizarCarta = (cartas, pesquisa) => {
  const condicao = (posicao) => {
    if (cartas[posicao] === pesquisa) {
      return posicao > 0 && cartas[posicao - 1] === pesquisa
        ? "antes"
        : "achou";
    } else if (cartas[posicao] < pesquisa) {
      return "antes";
    } else {
      return "depois";
    }
  };

  return pesquisaBinaria(0, cartas.length, condicao);
};

// Aplicando em outro problema

const primeiraOcorrencia = (nums, target) => {
  const condicao = (posicao) => {
    if (nums[posicao] === target) {
      return posicao > 0 && nums[posicao - 1] === target ? "antes" : "achou";
    } else if (nums[posicao] < target) {
      return "depois";
    } else {
      return "antes";
    }
  };

  return pesquisaBinaria(0, nums.length, condicao);
};

const ultimaOcorrencia = (nums, target) => {
  const condicao = (posicao) => {
    if (nums[posicao] === target) {
      return posicao < nums.length - 1 && nums[posicao + 1] === target
        ? "depois"
        : "achou";
    } else if (nums[posicao] < target) {
      return "depois";
    } else {
      return "antes";
    }
  };

  return pesquisaBinaria(0, nums.length, condicao);
};

const priemiraEUltimaOcorrencia = (nums, target) => {
  return primeiraOcorrencia(nums, target), ultimaOcorrencia(nums, target);
};
