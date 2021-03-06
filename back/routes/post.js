const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const  { authRank } = require('../middleware/admin')
const postCtrl = require('../controllers/post')

router.post('/createPost',auth, multer, postCtrl.createPost);
router.post('/createComment',auth, multer, postCtrl.createComment);
router.get('/', auth,  postCtrl.getPosts);
router.get('/:uuid',auth , postCtrl.getPost);
router.get('/userPosts/:uuid',auth , postCtrl.userPosts);
// router.put('/:uuid',auth , postCtrl.updatePost);
router.delete('/deletePost/:uuid',auth, authRank('admin'), postCtrl.deletePost);
router.delete('/deleteComment/:uuid',auth, authRank('admin'), postCtrl.deleteComment);

module.exports = router;