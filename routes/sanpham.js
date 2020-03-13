const express= require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer')
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
  dest: 'uploads/sanpham',
  fileFilter: (req, file, callback) => {
    callback(null, imageMimeTypes.includes(file.mimetype))
  }
})

const sanpham = require('../models/sanpham')

router.get('/new',async(req,res)=>{
        res.render('sanpham/new',{title:"Tạo sản phẩm", sanpham: new sanpham()})
})

router.post('/',upload.single('hinhAnh'), async(req, res)=>{
    const fileName = req.file != null ? req.file.filename : null
    const sanphamMoi = new sanpham({
        ten:req.body.ten,
        loai:req.body.loai,
        moTa:req.body.moTa,
        gia:req.body.gia,
        soLuongTon: req.body.soLuongTon,
        hinhAnh: fileName
    })
    try{
        const sanphamSave = await sanphamMoi.save()
        res.send('Tao thanh cong');
    }
    catch (err){
        res.send('Loi')
    }
})

module.exports = router;