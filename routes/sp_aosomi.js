const express= require('express')
const router = express.Router();
const sanpham = require('../models/sanpham')

router.get('/',async(req,res)=>{
    try{
        const aosomis= await sanpham.find({loai:"Áo sơ mi"})
        res.render('sp_aosomi/index',{aosomis: aosomis,title:"Áo sơ mi"})
    }catch{
        res.send('Loi')
    }
});
module.exports = router;