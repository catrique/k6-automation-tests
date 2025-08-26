export function generateText(numberOfLines, textOption = 1) {
  const defaultText = `
    Alvorada lá no morro, que beleza.
    Ninguém chora, não há tristeza.
    Ninguém sente dissabor.
    O sol colorindo, é tão lindo, é tão lindo.
    E a natureza sorrindo, tingindo, tingindo.
    Alvorada...
    Alvorada lá no morro, que beleza.
    Ninguém chora, não há tristeza.
    Ninguém sente dissabor.
    O sol colorindo é tão lindo, é tão lindo.
    E a natureza sorrindo, tingindo, tingindo.
    Você também me lembra a alvorada.
    Quando chega iluminando.
    Meus caminhos tão sem vida.
    E o que me resta é bem pouco.
    Quase nada, de que ir assim.
    Vagando numa estrada perdida.
    Alvorada...
    Alvorada lá no morro, que beleza.
    Ninguém chora, não há tristeza.
    Ninguém sente dissabor.
    O sol colorindo é tão lindo, é tão lindo.
    E a natureza sorrindo, tingindo, tingindo.
    Alvorada...
    Alvorada lá no morro, que beleza.
    Ninguém chora, não há tristeza.
    Ninguém sente dissabor.
    O sol colorindo é tão lindo, é tão lindo.
    E a natureza sorrindo, tingindo, tingindo.
    Você também me lembra a alvorada.
    Quando chega iluminando.
    Meus caminhos tão sem vida.
    E o que me resta é bem pouco.
    Quase nada, de que ir assim.
    Vagando numa estrada perdida.
    Alvorada...
    Alvorada lá no morro, que beleza.
    Ninguém chora, não há tristeza.
    Ninguém sente dissabor.
    O sol colorindo...
  `;

  const chicoMineiroText = `
    Cada vez que me alembro
    Do amigo Chico Mineiro
    Das viage que nois fazia
    Era ele meu cumpanheiro
    Sinto uma tristeza
    Uma vontade de chorar
    Alembrando daqueles tempos
    Que não mais há de voltar
    Apesar de eu ser patrão
    Eu tinha no coração
    O amigo Chico Mineiro
    Caboclo bom decidido
    Na viola era delorido
    E era o peão dos boiadeiro
    Hoje porém com tristeza
    Recordando das proeza
    Da nossa viage motin
    Viajemo mais de dez ano
    Vendendo boiada e comprando
    Por esse rincão sem fim
    Caboclo de nada temia
    Mas porém, chegou um dia
    Que Chico apartou-se de mim
    Fizemos a última viagem
    Foi lá pro sertão de Goiás
    Fui eu e o Chico Mineiro
    Também foi o capataz
    Viajemos muitos dias
    Pra chegar em Ouro Fino
    Aonde nós passemo a noite
    Numa festa do Divino
    A festa tava tão boa
    Mas ante' não tivesse ido
    O Chico foi baleado
    Por um homem desconhecido
    Larguei de comprar boiada
    Mataram meu cumpanheiro
    Acabou-se o som da viola
    Acabou-se o Chico Mineiro
    Despois daquela tragédia
    Fiquei mais aborrecido
    Não sabia da nossa amizade
    Porque nóis dois era unido
    Quando vi seu documento
    Me cortou meu coração
    Vim saber que o Chico Mineiro
    Era meu legítimo irmão
  `;

  const selectedText = textOption === 2 ? chicoMineiroText : defaultText;

  const lines = selectedText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const limit = Math.min(numberOfLines, lines.length);

  return lines.slice(0, limit).join('\n');
}
