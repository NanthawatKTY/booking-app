import express from 'express';
import { updateUser, delUser, getUser, getAllUser } from '../controllers/user.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in")
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your acc")
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send("Hello Admin, you are logged in and you can delete all accs")
});

//UPDATE
router.put('/:id',verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser, delUser)

//GET
router.get('/:id', verifyUser, getUser)

//GET ALL
router.get('/', verifyAdmin, getAllUser)

export default router;