const express= require('express')
const router = express.Router();
const path = require('path');

const sanpham = require('../models/sanpham')

router.get('/',async(req,res)=>{
    try{
        const quantays= await sanpham.find({loai:"Quần tây"})
        res.render('sp_quantay/index',{quantays: quantays,title:"Quần tây"})
    }catch{
        res.send('Loi')
    }
});
module.exports = router;