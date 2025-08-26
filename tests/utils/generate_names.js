// geradorNomes.js
export function generateRandomName() {
    const primeirosNomes = ["Luiz", "Otavio", "Carlos", "Rafael", "Pedro", "Mateus", "João", "Gabriel", "Diego", "Fernando", "Bruno", "Caio", "Alexandre", "Vitor", "Thiago", "Gustavo", "Marcelo"];
    const nomesDoMeio = ["Felipe", "Augusto", "Henrique", "Rodrigo", "Lucas", "André", "Eduardo", "Miguel", "Bruno", "Vinicius", "Paulo", "Roberto", "Ricardo", "Samuel", "Daniel", "Jorge", "Leonardo"];
    const sobrenomes = ["Silva", "Mendes", "Fonseca", "Almeida", "Pereira", "Santos", "Ferreira", "Gomes", "Martins", "Oliveira", "Costa", "Araujo", "Barbosa", "Correia", "Teixeira", "Ribeiro", "Sousa"];
    const primeiroNome = primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)];
    const nomeDoMeio = nomesDoMeio[Math.floor(Math.random() * nomesDoMeio.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return `${primeiroNome} ${nomeDoMeio} ${sobrenome}`;
}
