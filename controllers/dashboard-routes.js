const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('======================');
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'title',
//       'post_text',
//       'createdAt',
//       ],
//       order: [['createdAt', 'DESC']],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'postId', 'user_id', 'createdAt'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('dashboard', { posts, loggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     }, 
//     attributes: [
//       'id',
//       'title',
//       'post_text',
//       'createdAt',
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       },
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'postId', 'user_id', 'createdAt'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//     ]
//   })
//     .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }
//         //serialize the data
//         const post = dbPostData.get({ plain: true });
//         // pass to the template
//         res.render('edit-post', {
//           post,
//           loggedIn: req.session.loggedIn
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });
  
//   router.get('/new', (req, res) => {
//     res.render('new-post');
//   });
  

module.exports = router;