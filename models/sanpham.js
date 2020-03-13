const moongoose = require('mongoose')
const path = require('path')

const sanPhamSchema = new moongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    loai:{
        type:String,
        required: true
    },
    moTa:{
        type: String,
    },
    gia:{
        type: Number,
        required: true
    },
    soLuongTon:{
        type: Number,
        required: true
    },
    hinhAnh:{
        type: String,
    }
})

sanPhamSchema.virtual('anhsanphamPath').get(function(){
    if(this.hinhAnh !=null){
        return path.join('/uploads/sanpham',this.hinhAnh)
    }
})

module.exports = moongoose.model('sanpham',sanPhamSchema)