import { PrismaClient } from '@prisma/client';

async function main() {

  const prisma = new PrismaClient();
  
  const clientes = await prisma.cliente.findMany();

  console.log('Lista de Clientes:');

  clientes.forEach((cliente) => {

    console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, Nome Completo: ${cliente.nomeCompleto}, CPF: ${cliente.cpf}, Endereço: ${cliente.endereco}`);

  });
  
  await prisma.$disconnect();

}

main().catch((e) => {

  throw e;
  
});
