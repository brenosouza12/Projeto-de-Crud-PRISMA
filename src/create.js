import { PrismaClient } from '@prisma/client';

async function main() {

  const prisma = new PrismaClient();
  
  const novoCliente = {

    id: 1223772377 ,
    nome: 'Luna',
    nomeCompleto: 'Luna Louise Sparkle',
    cpf: '012.177.222-10',
    endereco: 'Rua Julia Velvet, 212, Little X, Aspect Sword',

  };

  const clienteCriado = await prisma.cliente.create({ data: novoCliente });
  console.log(`Cliente criado: ${JSON.stringify(clienteCriado)}`);
  
  await prisma.$disconnect();

}

main().catch((e) => {

  throw e;

});




// id: '1223772377' ,
//     nome: 'Luna',
//     nomeCompleto: 'Luna Louise Sparkle',
//     cpf: '012.177.222-10',
//     endereco: 'Rua Julia Velvet, 212, Little X, Aspect Sword',