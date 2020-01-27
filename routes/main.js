const express = require('express');
const mongoose = require('mongoose');
const models = require('../models');
const router = express.Router();

router.get('/', async(req,res)=>{
    const posts = await mongoose.model('post').find({})
    .limit(10)
    .lean();
    res.render('index', {posts});
});

router.get('/post', (req,res)=>{
    res.render('post');
});

router.post('/post', (req,res)=>{
    const {title, shortDescription, content} = req.body;
    if(!title || !shortDescription || !content) return res.json({msg: 'Preencha todos os requisitos!'});
    mongoose.model('post').create({title, shortDescription, content}).then(()=>{
        return res.json({msg: 'Noticia criada com sucesso!', code: 201});
    })
    .catch((err)=>{
        console.log(err);
        return res.json({msg: 'Ocorreu um erro interno.'});
    });
});

module.exports = router;