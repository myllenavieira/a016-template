const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// for (let i = 0; i < filmes.length; i++) {
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`);
//   let elenco = `Tem elenco: `
//   for (let j = 0; j < filmes[i].elenco.length; j++) {
//     if (j+1 == filmes[i].elenco.length) {
//       elenco += `${filmes[i].elenco[j]}.`
//     } else {
//       elenco += `${filmes[i].elenco[j]}, `
//     }
//   }
//   console.log(elenco);
// }


// for (let i in filmes) {
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
//   let elenco = `Tem no elenco:`;
//     for (let j of filmes[i].elenco) {
//       elenco += ` ${j},`;
//     }
//     console.log(elenco);
// }
  






// const megaSena = [
//   [1, 2 ,3 , 4, 5, 6],
//   [11, 22, 33, 44, 55, 66],
//   [10, 20, 30, 40, 50, 60],
//   [9, 19, 29, 39, 49, 59],
// ]
//exercício 1
// if(megaSena.length === 4){

//   for(let i =0; i<megaSena.length; i++){
//     let sorteio = `Sorteio ${i+1}: `
//     //lê os arrays completos e nomeia o número do sorteio
//     for (let j = 0; j < megaSena[i].length; j++) {
//       sorteio += `${megaSena[i][j]} `;
//       //lê os números dentro do array que foi lido antes
//     }
//     console.log(sorteio);
//   }
// }else{
//   console.log(`É necessário alterar o número de itens do array`);
// }

//exercício 2 e 3
// if(megaSena.length === 4){

//   for(let i in megaSena){
//     //o i aqui é uma string
//     let sorteio = `Sorteio ${Number(i)+1}: `
//     //lê os arrays completos e nomeia o número do sorteio
//     for(let j of megaSena[i]){
//       //o j já vai trazer o valor 
//       sorteio += `${[j]} `;
//       //lê os números dentro do array que foi lido antes
//     }
//     console.log(sorteio);
//   }
// }else{
//   console.log(`É necessário alterar o número de itens do array`);
// }
