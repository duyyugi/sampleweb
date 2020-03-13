const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')


app.set('view engine','ejs');
app.set('views',__dirname+'/views')
app.use(expressLayouts)
app.set('layout','layouts/layout')
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use("/uploads", express.static('uploads'))
app.use("/css", express.static('css'))
app.use("/fonts", express.static('fonts'))
app.use("/img", express.static('img'))
app.use("/js", express.static('js'))
app.use("/sass", express.static('sass'))
app.use("/shop_doc", express.static('shop_doc'))
app.use("/webfonts", express.static('webfonts'))

const indexRouter = require('./routes/index')
const sanphamRouter = require('./routes/sanpham')
const sp_quantayRouter = require('./routes/sp_quantay')
const sp_aothunRouter = require('./routes/sp_aothun')
const sp_aosomiRouter = require('./routes/sp_aosomi')

app.use('/',indexRouter)  
app.use('/sanpham',sanphamRouter)
app.use('/sp_quantay',sp_quantayRouter)
app.use('/sp_aothun',sp_aothunRouter)
app.use('/sp_aosomi',sp_aosomiRouter)

var mongoose = require('mongoose')
var uri="mongodb+srv://duyyugi0234:duyduyduy123@cluster0-cpcja.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true},);
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',()=>console.log('Connect to mongoose'))

app.listen(process.env.PORT || 3500)
//hehe