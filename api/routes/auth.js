import express from 'express';

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello World. This is auth endpoint")
})

router.get("/register", (req,res) => {
    res.send("Hello World. This is auth register endpoint")
})

export default router;