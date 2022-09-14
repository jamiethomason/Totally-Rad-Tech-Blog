const { Post } = require('../models');

const postdata = [
  {
    title: 'Cool Tech',
    body: 'Let me tell you about some cool tech!',
    userId: 1,
  },
  {
    title: 'Uncool Tech',
    body: 'Let me tell you about some bad tech!',
    userId: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;