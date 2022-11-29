const {Router} = require('express');
const router= Router();
const {getUsers, deleteUser, updateUser, getUser, addUsers}= require('../controllers/users.controller');
router.route('/')
    .get(getUsers)
    .post(addUsers)
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
module.exports= router;