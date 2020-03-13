const express= require('express')
const router = express.Router();

const sanpham = require('../models/sanpham')

router.get('/',async(req,res)=>{
    try{
        const aothuns= await sanpham.find({loai:"Áo thun"})
        res.render('sp_aothun/index',{aothuns: aothuns,title:"Áo thun"})
    }catch{
        res.send('Loi')
    }
});
module.exports = router;