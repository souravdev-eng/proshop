import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Sourav',
    email: 'sourav@gmail.com',
    isAdmin: true,
    password: bcrypt.hashSync('sourav_pass'),
  },
  {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    password: bcrypt.hashSync('Sincere@aprilbiz'),
  },
  {
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    password: bcrypt.hashSync('Shanna@melissatv'),
  },
];

export default users;
