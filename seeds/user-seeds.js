const { User } = require('../models');

const userdata = [
  {
    username: 'Jamie',
    email: 'example@gmail.com',
    password: '123456',
  },
];

const seedUser = () => User.bulkCreate(userdata,{individualHooks:true});

module.exports = seedUser;