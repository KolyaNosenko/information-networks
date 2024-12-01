/* eslint-disable @typescript-eslint/no-require-imports */
'use strict';

const { PrismaClient } = require('prisma-client-51dfee82552596b2bbbf8250d9790cb81040b2ad008efabf1ed3085f66f7ec23');
const { roles } = require('./roles');

const prisma = new PrismaClient();

const main = async () => {
  await roles(prisma);
};

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
