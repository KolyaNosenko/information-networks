/* eslint-disable @typescript-eslint/no-require-imports */
'use strict';

const { PrismaClient } = require('../prisma');
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
