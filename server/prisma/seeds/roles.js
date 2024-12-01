/* eslint-disable @typescript-eslint/no-require-imports */
const { v4: uuidv4 } = require('uuid');

module.exports.roles = async (prisma) => {
  await prisma.role.create({ data: { id: uuidv4(), name: 'admin' } });

  // await prisma.user.update({
  //   where: { id: '' },
  //   data: { roles: { connect: [{ name: 'admin' }] } },
  // });
};
