
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo7bKomp-1j5cRHPcoXejzhnS_GDsZVu1jkg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LJMKjaa5RYPlJheNuZGnO5Hx4C1ZQlOoQg&usqp=CAU",
        "https://static.imgs.app/content/assetz/uploads/2017/04/atena-golpista-facebook-melhores-memes-62.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSikJtprG1gNxHz422-NxF5V6afNKJHkILRXg&usqp=CAU",
        "https://pm1.narvii.com/7368/901974603479ab884f7f95ab9d94ee7e65ccdf82r1-493-575v2_hq.jpg",
        "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/3b6d227e.jpg",
        "https://i.pinimg.com/236x/44/9a/34/449a343fda667d09b92d8eaf170e7473.jpg",
        "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/f5586e69.jpg",
        "https://midiamax.uol.com.br/media/uploads/legacy/2019/12/images-4.jpg",
        "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0deedf902a76c1faf63e0eed362f72fb59552e37603888f3c0da5d496a6f7e1a_1.jpg",
        "https://media.discordapp.net/attachments/873318637736427540/906244456376827965/Screenshot_20210731-225319.png",
        "https://c.tenor.com/690jBcTy_1MAAAAd/adm-kilbin.gif",
        "https://c.tenor.com/3JvUyg2YdsAAAAAd/lsd-doidao.gif",
        "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/355e2dab.jpg",
        "https://i.pinimg.com/originals/dd/6b/13/dd6b1324aeebf73b5af843c8d593fa01.jpg",
        "https://static.poder360.com.br/2020/05/be7f1072-3674-4918-941f-15e8c216fadd.jpg",
        "https://i.pinimg.com/736x/e1/7f/bb/e17fbbce394d8655fed3ddaee508a96d.jpg",
        "https://uploads.metropoles.com/wp-content/uploads/2021/09/19180509/meme-vulcao-Brasil.jpeg",
        "https://moosemidia.com.br/wp-content/uploads/2019/01/meme4.jpg",
        "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/81fd3758.jpg",
        "https://i.ytimg.com/vi/Pow-OU2sSaA/maxresdefault.jpg",
        "https://i1.sndcdn.com/artworks-gDpmiazDpgLfwyBz-E2pGag-t500x500.jpg",
        "https://gerarmemes.s3.us-east-2.amazonaws.com/memes/664134c3.webp",
        "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0deedf902a76c1faf63e0eed362f72fb59552e37603888f3c0da5d496a6f7e1a_1.jpg",
        "https://pm1.narvii.com/7368/901974603479ab884f7f95ab9d94ee7e65ccdf82r1-493-575v2_hq.jpg",
        "https://i.pinimg.com/474x/1f/77/25/1f7725f409acb2bae9f461e217693d9c.jpg",
        "https://i.redd.it/lnes8hpl6pb61.jpg",
        "https://i.pinimg.com/736x/50/72/47/507247b7153c756a15f911438d973080.jpg",
        "https://images3.memedroid.com/images/UPLOADED130/5e944721a7047.jpeg",
        "https://i.kym-cdn.com/entries/icons/original/000/035/767/cover4.jpg",
        "https://images3.memedroid.com/images/UPLOADED453/5e76d775ae2d2.jpeg",
        "https://pbs.twimg.com/media/Ejpco0zXkAEoxTx.jpg",
        "https://img.ifunny.co/images/186b2de27d287ff77897f911a02c3435f08a8dfea729f1a4402569b1053a34d6_1.jpg",
        "https://i.redd.it/0604sp0xy5551.jpg",
        "https://i.pinimg.com/736x/43/f6/96/43f6968985539cba1efa3a42a889bc6f.jpg",
        "https://i.pinimg.com/474x/d9/d3/ef/d9d3efd43f52f3e63fd0905879f3f2aa.jpg",
        "https://conteudo.imguol.com.br/c/entretenimento/fc/2018/02/09/regras-1-1518184300418_v2_450x337.png.webp",
        "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/f5572296e840ff2ee24b9e47e3dc901e90318589c8acaaba4137c660cf331094_1.jpg",
        "https://i.redd.it/lahjxh2yab551.jpg",
        "https://pics.me.me/send-this-to-a-discord-server-where-people-are-talking-61144859.png"
        ]
      
        
    });

});

module.exports = router;
