import { localizarCarta, testes } from "../";

describe("Bateria de Testes", () => {
  for (let i = 0; i < testes.length; i++) {
    const teste = testes[i];

    it(`Teste: ${i + 1}`, () => {
      const cartas = teste.entrada.cartas;
      const numN = teste.entrada.numN;
      const saida = teste.saida;

      const resultado = localizarCarta(cartas, numN);

      expect(resultado).toEqual(saida);
    });
  }
});
