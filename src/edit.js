import { PrismaClient } from '@prisma/client';

async function main() {
    
  const prisma = new PrismaClient();
  
  const clienteId = 1223772377;

  const novosDados = {

    nome: 'Clara',
    nomeCompleto: 'Clara Louise Spillet-Wayland',
    cpf: '477.097.212-12',
    endereco: 'Av. Clara Wayland,4312 ,Vila Wayland ,Aspect Sword',

  };

  const clienteEditado = await prisma.cliente.update({ where: { id: clienteId }, data: novosDados });
  console.log(`Cliente editado: ${JSON.stringify(clienteEditado)}`);
  
  await prisma.$disconnect();

}

main().catch((e) => {

  throw e;

});
