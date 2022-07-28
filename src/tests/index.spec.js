import { localizarCarta, localizarCartaLinear } from "../";

const testes = [
  {
    entrada: {
      cartas: [13, 12, 11, 7, 4, 3, 1, 0],
      pesquisa: 7,
    },
    saida: 3,
  },
  {
    // a pesquisa está em algum ponto no meio da lista cartas.
    entrada: {
      cartas: [13, 11, 10, 7, 4, 3, 1, 0],
      pesquisa: 3,
    },
    saida: 5,
  },
  {
    // a pesquisa é o primeiro elemento da lista cartas.
    entrada: {
      cartas: [4, 2, 1, -1],
      pesquisa: 4,
    },
    saida: 0,
  },
  {
    // a pesquisa é o último elemento da lista cartas.
    entrada: {
      cartas: [3, -1, -9, -127],
      pesquisa: -127,
    },
    saida: 3,
  },
  {
    // A lista cartas tem apenas um elemento, que é a pesquisa.
    entrada: {
      cartas: [6],
      pesquisa: 6,
    },
    saida: 0,
  },
  {
    // A lista cartas não contém a pesquisa.
    entrada: {
      cartas: [9, 7, 5, 2, -9],
      pesquisa: 4,
    },
    saida: -1, // Como o problema não especifica essa situação, definimos um valor arbitrário
  },
  {
    // A lista cartas está vazia.
    entrada: {
      cartas: [],
      pesquisa: 7,
    },
    saida: -1,
  },
  {
    // A lista cartas tem números que se repetem.
    entrada: {
      cartas: [8, 8, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
      pesquisa: 3,
    },
    saida: 7,
  },
  {
    // a pesquisa está em mais de uma posição na lista cartas.
    entrada: {
      cartas: [8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
      pesquisa: 6,
    },
    saida: 2,
  },
];

describe("Bateria de Testes", () => {
  for (let i = 0; i < testes.length; i++) {
    const teste = testes[i];

    it(`Teste: ${i + 1}`, () => {
      const cartas = teste.entrada.cartas;
      const pesquisa = teste.entrada.pesquisa;
      const saida = teste.saida;

      const resultado = localizarCarta(cartas, pesquisa);

      expect(resultado).toEqual(saida);
    });
  }

  it("Mega teste linear", () => {
    const cartas = Array.apply(null, Array(100000))
      .map((_, indice) => indice)
      .sort((a, b) => b - a);
    const pesquisa = 2;
    const saida = 99997;

    const resultado = localizarCartaLinear(cartas, pesquisa);

    expect(resultado).toEqual(saida);
  });

  it("Mega teste binário", () => {
    const cartas = Array.apply(null, Array(100000))
      .map((_, indice) => indice)
      .sort((a, b) => b - a);
    const pesquisa = 2;
    const saida = 99997;

    const resultado = localizarCarta(cartas, pesquisa);

    expect(resultado).toEqual(saida);
  });
});
