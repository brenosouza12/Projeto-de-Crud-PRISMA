import { PrismaClient } from '@prisma/client';

async function main() {

  const prisma = new PrismaClient();
  
  const clienteId = 1223772377;

  await prisma.cliente.delete({ where: { id: clienteId } });
  
  console.log('Cliente removido com sucesso');
  
  await prisma.$disconnect();

}

main().catch((e) => {

  throw e;
  
});
