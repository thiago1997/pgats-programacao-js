const quantidadePetiscosDisponiveis = 4

for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++) {
  console.log(`Dando o petisco de nº ${petisco} para o Totó`)
}

console.log(`Satisfeito, chega de petiscos por hoje!`)

// Exemplo aluno - extra

const alimentarDog = (quantidadePetiscos) => {
  for (let i = 1; i <= quantidadePetiscos; i++) {
      console.log(i < quantidadePetiscos ? `Ganhei ${i} petisco. Quero mais!` : 'Agora estou satisfeito!');
  }
}

alimentarDog(4)

// Exemplo de aluno

// function alimentar(...treats) {
//   let chance = 0; // Starting chance of being full
//   let isFull = false;

//   for (let i = 0; i < treats.length; i++) {
//     chance += 5; // Increase the chance by 5% per treat
//     const random = Math.random() * 100; // Random number between 0 and 100

//     console.log(`Petisco ${i + 1}: Cachorro comeu "${treats[i]}". Chance de estar cheio: ${chance}%.`);

//     if (random < chance) {
//       console.log("O cachorro está cheio!");
//       isFull = true;
//       break;
//     } else {
//       console.log("O cachorro ainda está com fome!");
//     }
//   }

//   if (!isFull) {
//     console.log("Comeu todos os petiscos, mas ainda está com fome!");
//   }
// }

// // Example usage:
// alimentar("Biscoito", "Galinha", "Porco", "Queijo", "Ração");
